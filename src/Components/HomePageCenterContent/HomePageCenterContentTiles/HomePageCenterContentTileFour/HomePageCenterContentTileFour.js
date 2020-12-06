import React from "react";
import Auxillary from "../../../../HOC/Auxillary/Auxillary";
import css from "../HomePageCenterContentTileFour/HomePageCenterContentTileFour.module.css";
const HomePageCenterContentFour = (props) => {
  return (
    <Auxillary>
      <li className={css.cservicesitem}>
        <h3>UX Consultation</h3>
        <p>
          If you don&rsquo;t know what kind of service to request from us,
          don&rsquo;t worry. We can help and see what fits your business and
          your budget.
        </p>
      </li>
    </Auxillary>
  );
};
export default HomePageCenterContentFour;
