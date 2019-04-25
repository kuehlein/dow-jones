import React, { Fragment } from "react";

/**
 * Navbar. Rendered at the top of the main `App` component. Receives `cookies`
 * as props to determine what navigation options are available.
 *
 * @param {*} props - contains `handleLogout: () => void` and `cookies: Cookie`
 * @returns {*} ReactElement<any>
 */
const Search = ({ getText }) => (
  <Fragment>
    <p>search</p>
    <input
      type="text"
      name="firstname"
      placeholder="find an article..."
      onChange={e => getText(e.target.value)}
    />
  </Fragment>
);

export default Search;

// ! controlled?
