import React from "react";

/**
 * Card for displaying either image or graphic. This component
 * will be mapped over by `CardContainer`.
 *
 * @returns {*} ReactElement<any>
 */
const Card = ({ pic, text1, text2, link }) => (
  <div className="card">
    <a href={link}>
      <img src={pic} alt="img" />
      <h3>{text1}</h3>
      <p>{text2}</p>
    </a>
  </div>
);

export default Card;
