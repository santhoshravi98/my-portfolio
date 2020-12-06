import React from "react";
import Auxillary from "../../../../HOC/Auxillary/Auxillary";
import css from '../HomePageCenterContentTileOne/HomePageCenterContentTileOne.module.css'
const HomePageCenterContentOne = (props) => {
  return (
    <Auxillary>
      <li className={css.cservicesitem}>
        <h3>Responsive Wseb Design</h3>
        <p>
          We leverage the concept of mobile-first design. Through our work, we
          focus on designing an experience that works across different screen
          sizes.
        </p>
      </li>
    </Auxillary>
  );
};
export default HomePageCenterContentOne;
