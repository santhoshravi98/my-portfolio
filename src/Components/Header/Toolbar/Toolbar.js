import Headeritems from "../HeaderItems/HeaderItems";
import ToolbarCss from '../Toolbar/Toolbar.module.css'
import Logo from '../../UI/Logo/Logo'
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle"
const Toolbar = (props) => {
  return (
    <header className={ToolbarCss.Toolbar}>
      <DrawerToggle refToToggleSideDrawer={props.refToToggleSideDrawer}/>
      <div onClick={props.refToOpenSideDrawer}><Logo/></div>
      
    <nav className={ToolbarCss.DesktopOnly}>
    <Headeritems/>
    </nav>
    </header>
  )
};
export default Toolbar;
