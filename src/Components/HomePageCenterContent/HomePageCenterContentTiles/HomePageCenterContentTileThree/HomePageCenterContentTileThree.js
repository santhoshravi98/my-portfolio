import React from "react";
import Auxillary from "../../../../HOC/Auxillary/Auxillary";
import css from "../HomePageCenterContentTileThree/HomePageCenterContentTileThree.module.css";
const HomePageCenterContentThree = (props) => {
  return (
    <Auxillary>
      <li className={css.cservicesitem}>
        <h3>Front End Development</h3>
        <p>
          We are Front End masters with a deep focus on HTML, CSS. The result of
          our work is a responsive, accessible, and performant websites. Either
          you have the design ready and want us to code it, or you want us to do
          both design and code to do so.
        </p>
      </li>
    </Auxillary>
  );
};
export default HomePageCenterContentThree;
