import React from "react";

import styles from "./landing.css";

/**
 * Card
 *
 * @returns {*} ReactElement<any>
 */
const Card = ({ pic, text1, text2 }) => (
  <div style={{ width: "10em" }}>
    <img src={pic} alt="img" style={{ width: "100px" }} />
    <p>{text1}</p>
    <p>{text2}</p>
  </div>
);

export default Card;
