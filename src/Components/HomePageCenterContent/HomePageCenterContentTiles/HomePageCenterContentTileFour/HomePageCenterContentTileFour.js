import React from "react";
import Auxillary from "../../../../HOC/Auxillary/Auxillary";
import css from "../HomePageCenterContentTileFour/HomePageCenterContentTileFour.module.css";
const HomePageCenterContentFour = (props) => {
  return (
    <Auxillary>
      <li className={css.cservicesitem}>
        <h3>Projects</h3>
        <p>
          A Machine Learning Emotion Identifier using Cognitive Learning. An Auction System for properties with Live Bidding Engine. Some of my ideas are in implementation and I will update this section very sooooon
        </p>
      </li>
    </Auxillary>
  );
};
export default HomePageCenterContentFour;
