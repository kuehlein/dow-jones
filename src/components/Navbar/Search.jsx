import React from "react";

/**
 * Search bar component. User is able to filter results in
 * `SearchResults` using the input here. `App` watches state of
 * input and passes it down to `SearchResults`.
 *
 * @param {*} props - contains `getText: (value: str) => void`
 * @returns {*} ReactElement<any>
 */
const Search = ({ getText }) => (
  <div style={{ display: "flex" }}>
    <p>search</p>
    <input
      type="text"
      placeholder="find an article..."
      onChange={e => getText(e.target.value)} // ! do this onClick with a search button
    />
  </div>
);

export default Search;
