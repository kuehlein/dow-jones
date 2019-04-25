import "./App.css";

import axios from "axios";
import React, { Component, Fragment } from "react";

import Navbar from "./Navbar";
import SearchResults from "./SearchResults";

/**
 * Top level component of app. Rendered by `ReactDOM.render()` in `src/index.js`.
 * Contains all state for the application.
 *
 * @param {*}
 * @returns {*} ReactElement<any>
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphics: [],
      images: [],
      text: ""
    };
    this.getText = this.getText.bind(this);
  }

  async componentWillMount() {
    // images
    const images = await axios.default
      .get(
        "https://hanilim.github.io/newsroomtools-test2019-assets/api/im.json"
      )
      .then(res => res.data)
      .catch(err => console.log(err));

    // graphics
    const graphics = await axios.default
      .get(
        "https://hanilim.github.io/newsroomtools-test2019-assets/api/graphics.json"
      )
      .then(res => res.data)
      .catch(err => console.log(err));

    this.setState({
      graphics: graphics.recent,
      images: images.images
    });
  }

  getText(value) {
    this.setState({ text: value });
  }

  render() {
    const { images, graphics, text } = this.state;

    return (
      <Fragment>
        <Navbar getText={this.getText} />
        <hr />
        <SearchResults graphics={graphics} images={images} text={text} />
      </Fragment>
    );
  }
}

export default App;
