import axios from "axios";
import React, { Component } from "react";

import Card from "./Card";
import styles from "./landing.css";

/**
 * Landing
 *
 * @returns {*} ReactElement<any>
 */
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphics: [],
      images: []
    };
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

  render() {
    const { images, graphics } = this.state;
    const { text } = this.props;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        {images &&
          images
            .filter(
              image => image.credit.match(text) || image.caption.match(text)
            )
            .map(image => (
              <Card
                pic={image.href}
                text1={image.caption}
                text2={image.credit}
              />
            ))}
        {graphics &&
          graphics
            .filter(
              graphic =>
                graphic.headline.match(text) || graphic.description.match(text)
            )
            .map(graphic => (
              <Card
                pic={graphic.promo_image}
                text1={graphic.headline}
                text2={graphic.description}
              />
            ))}
      </div>
    );
  }
}

export default Landing;
