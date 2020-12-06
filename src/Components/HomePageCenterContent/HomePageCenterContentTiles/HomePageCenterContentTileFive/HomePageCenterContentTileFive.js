import React from "react";
import Auxillary from "../../../../HOC/Auxillary/Auxillary";
import css from "../HomePageCenterContentTileFour/HomePageCenterContentTileFour.module.css";
const HomePageCenterContentFour = (props) => {
  return (
    <Auxillary>
      <li className={css.cservicesitem}>
        <h3>Mobile Apps Design</h3>
        <p>
          To reach more customers and the goals of your business, a mobile
          application is necessary these days. We will work on the app design
          from scratch to final tested prototype.
        </p>
      </li>
    </Auxillary>
  );
};
export default HomePageCenterContentFour;
