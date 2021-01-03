import React from "react";
import Auxillary from "../../../../HOC/Auxillary/Auxillary";
import css from "../HomePageCenterContentTileTwo/HomePageCenterContentTileTwo.module.css";
const HomePageCenterContentTwo = (props) => {
  return (
    <Auxillary>
      <li className={css.cservicesitem}>
        <h3>Programming Languages</h3>
        <p>
          I have worked with C# as part of my office project. C/C++ is also something which laid my basic foundation. Also worked with PHP and a bit of Python as my College Projects
        </p>
      </li>
    </Auxillary>
  );
};
export default HomePageCenterContentTwo;
