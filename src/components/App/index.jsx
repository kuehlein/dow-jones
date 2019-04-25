// ! css modules
import "./App.css";

import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import Landing from "../Landing";
import Footer from "./Footer";
import Navbar from "./Navbar";

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

/**
 * Top level component of app. Wrapped with providers and rendered by
 * `ReactDOM.render()` in `client/index.jsx`.
 *
 * @param {*}
 * @returns {*} ReactElement<any>
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.getText = this.getText.bind(this);
  }

  getText(value) {
    this.setState({ text: value });
  }

  render() {
    const { text } = this.state;

    return (
      <Fragment>
        <Navbar getText={this.getText} />
        <hr />
        <Landing text={text} />
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(App);
