import React, { Component } from "react";
import HomePageHero from "../../Components/HomePageHero/HomePageHero";
import Auxillary from '../../HOC/Auxillary/Auxillary'

class HomePageBanner extends Component {
  render() {
    return (
      <Auxillary>
        <HomePageHero />
      </Auxillary>
    );
  }
}
export default HomePageBanner;
