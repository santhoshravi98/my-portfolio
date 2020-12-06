import React from "react";
import Auxillary from "../../../../HOC/Auxillary/Auxillary";
import css from "../HomePageCenterContentTileFour/HomePageCenterContentTileFour.module.css";
const HomePageCenterContentFour = (props) => {
  return (
    <Auxillary>
      <li className={css.cservicesitem}>
        <h3>UX Research</h3>
        <p>
          It&rsquo;s important to research deeply for the product you want to
          build. We help in that by defining the user audience, working on user
          stories, competitive analysis and much more.{" "}
        </p>
      </li>
    </Auxillary>
  );
};
export default HomePageCenterContentFour;
