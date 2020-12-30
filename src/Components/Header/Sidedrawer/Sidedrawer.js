import React from "react";
import HeaderItems from "../../Header/HeaderItems/HeaderItems";
import Auxillary from "../../../HOC/Auxillary/Auxillary";
import Backdrop from '../../UI/Backdrop/Backdrop'
import SidedrawerCss from "../Sidedrawer/Sidedrawer.module.css";
const Sidedrawer = (props) => {
  let sideDrawerCss = [SidedrawerCss.SideDrawer, SidedrawerCss.Close];
  if (props.showSideDrawer) {
    sideDrawerCss = [SidedrawerCss.SideDrawer, SidedrawerCss.Open];
  }
  return (
    <Auxillary>
      <Backdrop showBackdrop={props.showSideDrawer} refToToggleSideDrawer={props.refToToggleSideDrawer} />
      <div
        className={sideDrawerCss.join(" ")}
        onClick={props.refToToggleSideDrawer}
      >
        <nav>
          <HeaderItems />
        </nav>
      </div>
    </Auxillary>
  );
};
export default Sidedrawer;
