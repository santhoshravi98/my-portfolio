import React, { Component } from "react";
import Toolbar from "../../Components/UI/Toolbar/Toolbar";
import Sidedrawer from "../../../src/Components/UI/Sidedrawer/Sidedrawer";
import Auxillary from "../Auxillary/Auxillary";
//Overall Layout for the Application
class Layout extends Component {
  //A State to decide whether to show sidedrawer or not
  state = {
    showSideDrawer: false,
  };

  render() {
    //We use Toolbar, Sidedrawer and Content to be rendered here
    return (
      <Auxillary>
        <Toolbar />
        <Sidedrawer />
        <main>{this.props.children}</main>
      </Auxillary>
    );
  }
}
export default Layout;
