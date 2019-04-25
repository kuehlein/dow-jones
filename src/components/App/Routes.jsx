import React from "react";
import { Route, Switch } from "react-router-dom";

import { Landing } from "..";

/**
 * Client-Side Routing (CSR) component. Index of various routes in the app.
 * Receives `cookies` as props to determine what routes are accessible.
 *
 * @param {*} props - contains `cookies: Cookie`
 * @returns {*} ReactElement<any>
 */
const Routes = () => (
  <Switch>
    {/* Routes placed here are available to all visitors */}
    <Route exact path="/" component={Landing} />
    <Route
      path="/landing"
      render={() => (
        <Landing />
      )}
    />
  </Switch>
);

export default Routes;
