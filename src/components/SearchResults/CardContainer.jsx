import React from "react";

import { filterData } from "./utils";

/**
 * Container for cards. Based on props received, this component will either contain
 * image or graphics cards.
 *
 * @returns {*} ReactElement<any>
 */
const CardContainer = ({ data, isImage, text }) => (
  <div>
    <div className="card-container">{filterData(data, isImage, text)}</div>
  </div>
);

export default CardContainer;
