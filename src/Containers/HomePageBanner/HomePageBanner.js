import React, { Component } from "react";
import HomePageHero from "../../Components/HomePageHero/HomePageHero";
import Auxillary from '../../HOC/Auxillary/Auxillary'
import HomePageCenterContent from '../../Components/HomePageCenterContent/HomePageCenterContent'

class HomePageBanner extends Component {
  render() {
    return (
      <Auxillary>
        <HomePageHero />
        <HomePageCenterContent/>
      </Auxillary>
    );
  }
}
export default HomePageBanner;
