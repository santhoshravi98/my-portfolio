import React from "react";
import Auxillary from "../../../../HOC/Auxillary/Auxillary";
import css from "../HomePageCenterContentTileThree/HomePageCenterContentTileThree.module.css";
const HomePageCenterContentThree = (props) => {
  return (
    <Auxillary>
      <li className={css.cservicesitem}>
        <h3>Database</h3>
        <p>
          Worked in SQL for Office Projects and also have done few of my College Works. Also worked in Elastic Search as part of my Office Project. Both of these remain my favourites. Wanted to try out few other flexible ones. I would be very happy if I get any other suggestions from the community.
        </p>
      </li>
    </Auxillary>
  );
};
export default HomePageCenterContentThree;
