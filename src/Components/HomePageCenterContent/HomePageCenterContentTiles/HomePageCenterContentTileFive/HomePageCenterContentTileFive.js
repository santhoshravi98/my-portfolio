import React from "react";
import Auxillary from "../../../../HOC/Auxillary/Auxillary";
import css from "../HomePageCenterContentTileFour/HomePageCenterContentTileFour.module.css";
const HomePageCenterContentFour = (props) => {
  return (
    <Auxillary>
      <li className={css.cservicesitem}>
        <h3>Hobbies</h3>
        <p>
          OK. Technical stuff is enough. Coming to Hobbies, I watch Movies(Tamil, English, Malayalam) and Series(English), Playing Cricket with friends always pulls me in. Playing Table Tennis has also been my recent addiction. 
          Following Tech Reviews and Vlogs has also become my recent Hobbies.  Also I watch random tech videos from youtube since I always get them from recommendations.
        </p>
      </li>
    </Auxillary>
  );
};
export default HomePageCenterContentFour;
