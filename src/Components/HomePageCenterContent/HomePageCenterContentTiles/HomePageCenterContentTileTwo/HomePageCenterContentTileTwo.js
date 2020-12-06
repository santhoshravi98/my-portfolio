import React from "react";
import Auxillary from "../../../../HOC/Auxillary/Auxillary";
import css from "../HomePageCenterContentTileTwo/HomePageCenterContentTileTwo.module.css";
const HomePageCenterContentTwo = (props) => {
  return (
    <Auxillary>
      <li className={css.cservicesitem}>
        <h3>UX Auditing</h3>
        <p>
          If you are unsure of how your app behaves, we can help by doing a
          detailed UX audit that will highlight most of the issues in your
          product. From there, we can take it further and fix all issues.
        </p>
      </li>
    </Auxillary>
  );
};
export default HomePageCenterContentTwo;
