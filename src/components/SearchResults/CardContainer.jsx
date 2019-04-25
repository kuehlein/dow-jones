import React from "react";

import Card from "./Card";

/**
 * Landing
 *
 * @returns {*} ReactElement<any>
 */
const CardContainer = ({ data, isImage, text }) => {
  const lowerText = text.toLowerCase();
  const fields = isImage
    ? ["href", "credit", "caption", ""]
    : ["promo_image", "headline", "description", "destination"];

  return (
    <div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {data &&
          data
            // filter out results that do not match our search
            // (by default everything matches)
            .filter(
              datum =>
                // we convert both strings to lower case so that our
                // searches are case insensitive
                datum[fields[1]].toLowerCase().match(lowerText) ||
                datum[fields[2]].toLowerCase().match(lowerText)
            )
            // map over the remaining data to produce cards
            .map((datum, i) => (
              <Card
                pic={datum[fields[0]]}
                text1={datum[fields[1]]}
                text2={datum[fields[2]]}
                link={datum[fields[3]]}
                key={datum.id || datum.uuid} // images have id, graphics have uuid
              />
            ))}
      </div>
    </div>
  );
};

export default CardContainer;
