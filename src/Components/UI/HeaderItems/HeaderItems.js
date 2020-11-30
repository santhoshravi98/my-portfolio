import HeaderItem from "../HeaderItem/HeaderItem.js";
import HeaderItemsCss from '../HeaderItems/HeaderItems.module.css'
const Headeritems = (props) => {
  return (
    <ul className={HeaderItemsCss.NavigationItems}>
      <HeaderItem link="/" exact>Work</HeaderItem>
      <HeaderItem link="/" exact>Resume</HeaderItem>
      <HeaderItem link="/" exact>Feedback</HeaderItem>
    </ul>
  );
};
export default Headeritems;