import React from "react";
import HeaderItems from "../HeaderItems/HeaderItems";
import Auxillary from "../../../HOC/Auxillary/Auxillary";
import Backdrop from "../Backdrop/Backdrop";
import SidedrawerCss from "../Sidedrawer/Sidedrawer.module.css";
const Sidedrawer = (props) => {
  let sideDrawerCss = [SidedrawerCss.SideDrawer, SidedrawerCss.Close];
  if (props.showSideDrawer) {
    sideDrawerCss = [SidedrawerCss.SideDrawer, SidedrawerCss.Open];
  }
  return (
    <Auxillary>
      <Backdrop />
      <div
        className={sideDrawerCss.join(" ")}
        onClick={props.refToCloseSideDrawer}
      >
        <nav>
          <HeaderItems />
        </nav>
      </div>
    </Auxillary>
  );
};
export default Sidedrawer;
