import HeaderItem from "../HeaderItem/HeaderItem.js";
import HeaderItemsCss from '../HeaderItems/HeaderItems.module.css'
const Headeritems = (props) => {
  return (
    <ul className={HeaderItemsCss.NavigationItems}>
      <HeaderItem link="/" exact>Home</HeaderItem>
      <HeaderItem link="/" exact>Home</HeaderItem>
      <HeaderItem link="/" exact>Home</HeaderItem>
    </ul>
  );
};
export default Headeritems;