import React, { Component } from "react";
import Toolbar from "../../Components/Header/Toolbar/Toolbar";
import Sidedrawer from '../../Components/Header/Sidedrawer/Sidedrawer'
import Auxillary from "../Auxillary/Auxillary";
import cssClasses from "../Layout/Layout.module.css";
import Footer from '../../Components/Footer/Footer'
//Overall Layout for the Application
class Layout extends Component {
  //A State to decide whether to show sidedrawer or not
  state = {
    showSideDrawer: false,
  };

  closeSideDrawer = () => {
    this.setState({
      showSideDrawer: true,
    });
  };

  ToggleSidedrawerHandler = (prevState) => {
    this.setState({
      showSideDrawer: !prevState.showSideDrawer,
    });
  };

  render() {
    //We use Toolbar, Sidedrawer and Content to be rendered here
    return (
      <Auxillary>
        <Toolbar refToToggleSideDrawer={this.ToggleSidedrawerHandler} />
        <Sidedrawer
          refToToggleSideDrawer={this.ToggleSidedrawerHandler}
          showSideDrawer={this.state.showSideDrawer}
        />
        <main className={cssClasses.Content}>{this.props.children}</main>
        <Footer />
      </Auxillary>
    );
  }
}
export default Layout;
