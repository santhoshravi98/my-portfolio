import React, { Component } from "react";
import Toolbar from "../../Components/UI/Toolbar/Toolbar";
import Sidedrawer from "../../../src/Components/UI/Sidedrawer/Sidedrawer";
import Auxillary from "../Auxillary/Auxillary";
import cssClasses from "../Layout/Layout.module.css";
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
      </Auxillary>
    );
  }
}
export default Layout;
