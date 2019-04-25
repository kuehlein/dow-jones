import React, { Fragment } from "react";

import Search from "./Search";

/**
 * Navbar. Rendered at the top of the main `App` component. Houses `Search` component.
 *
 * @param {*} props - contains `getText: (val: str) => void`
 * @returns {*} ReactElement<any>
 */
const Navbar = ({ getText }) => (
  <Fragment>
    <h2>Search Images and Graphics</h2>
    <Search getText={getText} />
  </Fragment>
);

export default Navbar;
