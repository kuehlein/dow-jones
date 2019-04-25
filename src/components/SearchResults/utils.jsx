import React from "react";

import Card from "./Card";

/**
 * *NOTE*
 * I probably wouldn't have tried to make this set of components dynamically render
 * cards based on content given because it makes for more confusing code, but
 * I thought I might as well go for it for fun ¯\_(ツ)_/¯
 *
 * This would however be something that I would probably do if the image and graphic
 * data had the same or similar shape.
 */

/**
 * Given input object `data `, filter out objects that do not contain search input `text`.
 * This filtering is case insensitive. If there are no results that match input,
 * return a message.
 *
 * @param {{}[]} data
 * @param {boolean} isImage
 * @param {str} text
 *
 * @returns {*} ReactElement<any>
 */
export const filterData = (data, isImage, text) => {
  const fields = isImage
    ? ["href", "credit", "caption", ""]
    : ["promo_image", "headline", "description", "destination"];

  const lowerText = text.toLowerCase();
  const filteredData =
    data &&
    data
      // filter out results that do not match our search
      // (by default everything matches)
      .filter(
        datum =>
          // we convert both strings to lower case so that our
          // searches are case insensitive
          datum[fields[1]].toLowerCase().match(lowerText) ||
          datum[fields[2]].toLowerCase().match(lowerText)
      );

  return formatJSON(isImage, filteredData, fields);
};

/**
 * Given the result of filtering array `data`, return an array of cards for each
 * piece of data remaining. If there are no matches, return a message instead.
 *
 * @param {*} isImage
 * @param {*} data
 * @param {*} fields
 *
 * @returns {*} ReactElement<any>
 */
const formatJSON = (isImage, data, fields) =>
  data.length ? (
    data.map(datum => (
      <Card
        pic={datum[fields[0]]}
        text1={datum[fields[1]]}
        text2={datum[fields[2]]}
        link={datum[fields[3]]}
        key={datum.id || datum.uuid} // images have id, graphics have uuid
      />
    ))
  ) : (
    // if there are no matching search results, display message
    <p>No {isImage ? "images" : "graphics"} to display</p>
  );
