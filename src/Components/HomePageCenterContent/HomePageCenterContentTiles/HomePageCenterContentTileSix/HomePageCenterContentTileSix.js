import React from "react";
import Auxillary from "../../../../HOC/Auxillary/Auxillary";
import css from "../HomePageCenterContentTileFour/HomePageCenterContentTileFour.module.css";
const HomePageCenterContentFour = (props) => {
  return (
    <Auxillary>
      <li className={css.cservicesitem}>
        <h3>Web Development - Front End</h3>
        <p>
          I always like playing with Front End Part of Web Development. Some of my favourites include React JS, Handlebar JS. This Site is Completed built with React JS.
        </p>
      </li>
    </Auxillary>
  );
};
export default HomePageCenterContentFour;
