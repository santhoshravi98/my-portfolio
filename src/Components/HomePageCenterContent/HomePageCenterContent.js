import React from "react";
import Auxillary from "../../HOC/Auxillary/Auxillary";
import css from "../HomePageCenterContent/HomePageCenterContent.module.css";
import HomePageCenterContentTileOne from "../HomePageCenterContent/HomePageCenterContentTiles/HomePageCenterContentTileOne/HomePageCenterContentTileOne";
import HomePageCenterContentTileTwo from "../HomePageCenterContent/HomePageCenterContentTiles/HomePageCenterContentTileTwo/HomePageCenterContentTileTwo";
import HomePageCenterContentTileThree from "../HomePageCenterContent/HomePageCenterContentTiles/HomePageCenterContentTileThree/HomePageCenterContentTileThree";
import HomePageCenterContentTileFour from "../HomePageCenterContent/HomePageCenterContentTiles/HomePageCenterContentTileFour/HomePageCenterContentTileFour";
import HomePageCenterContentTileFive from "../HomePageCenterContent/HomePageCenterContentTiles/HomePageCenterContentTileFive/HomePageCenterContentTileFive";
import HomePageCenterContentTileSix from "../HomePageCenterContent/HomePageCenterContentTiles/HomePageCenterContentTileSix/HomePageCenterContentTileSix";

const HomePageCenterContent = (props) => {
  return (
    <Auxillary>
      <section className={css.csection}>
        <h6 className={css.csectiontitle}>
          <span>Yes You Can</span>
        </h6>
        <ul className={css.cservices}>
          <HomePageCenterContentTileOne />
          <HomePageCenterContentTileTwo />
          <HomePageCenterContentTileThree />
          <HomePageCenterContentTileFour />
          <HomePageCenterContentTileFive />
          <HomePageCenterContentTileSix />

        </ul>
      </section>
    </Auxillary>
  );
};
export default HomePageCenterContent;
