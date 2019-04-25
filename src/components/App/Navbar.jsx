import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

// import { MButton } from "../Materials";

/**
 * Navbar. Rendered at the top of the main `App` component. Receives `cookies`
 * as props to determine what navigation options are available.
 *
 * @param {*} props - contains `handleLogout: () => void` and `cookies: Cookie`
 * @returns {*} ReactElement<any>
 */
const Navbar = ({ getText }) => (
  <Fragment>
    <h2>
      <Link disabled={window.location.pathname === "/"} to="/">
        <img style={{ height: "2em" }} alt="logo" /> {/* src={} */}
      </Link>
    </h2>
    <Search getText={getText} />
  </Fragment>
);

export default Navbar;
