import React, { Component } from "react";
import HomePageHero from "../../Components/HomePageHero/HomePageHero";
import Auxillary from "../../HOC/Auxillary/Auxillary";
import HomePageCenterContent from "../../Components/HomePageCenterContent/HomePageCenterContent";
import HomePageTimeLineDesktop from "../../Components/HomePageTimeLineDesktop/HomePageTimeLineDesktop";
import HomePageTimeLineMobile from '../../Components/HomePageTimeLineMobile/HomePageTimeLineMobile'
import css from '../HomePageBanner/HomePageBanner.module.css'
class HomePageBanner extends Component {
  componentDidMount() {
    var Footer = document.getElementById("Master_Footer");
    Footer.style.display = "block";
  }

  render() {
    return (
      <Auxillary>
        <HomePageHero />
        <HomePageCenterContent />
        <div className={css.desktoponly}>
          <HomePageTimeLineDesktop />
        </div>
        {/* <div className={css.mobileonly}>
          <HomePageTimeLineMobile />
        </div> */}
      </Auxillary>
    );
  }
}
export default HomePageBanner;
