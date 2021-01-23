import { NavLink } from "react-router-dom";
import HeaderItemCss from '../HeaderItem/HeaderItem.module.css'
const Headeritem = (props) => {
  return (
    <li className={HeaderItemCss.NavigationItem}>
      <NavLink to={props.link} exact={props.exact} target={props.target}>{props.children}</NavLink>
    </li>
  );
};
export default Headeritem;
