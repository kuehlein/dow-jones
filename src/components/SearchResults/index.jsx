import React from "react";

import CardContainer from "./CardContainer";

/**
 * SearchResults page. This is the main body of the app. Wraps the
 * containers for image and graphics cards.
 *
 * @returns {*} ReactElement<any>
 */
const SearchResults = ({ graphics, images, text }) => (
  <div className="search-results-container">
    <h2>Images</h2>
    <CardContainer data={images} isImage text={text} />

    <h2>Graphics</h2>
    <CardContainer data={graphics} isImage={false} text={text} />
  </div>
);

export default SearchResults;
