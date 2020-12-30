import HeaderItem from "../HeaderItem/HeaderItem.js";
import HeaderItemsCss from '../HeaderItems/Headeritems.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faFileInvoice, faComments, faCompass } from '@fortawesome/free-solid-svg-icons'
const Headeritems = (props) => {
    return (
        <ul className={HeaderItemsCss.NavigationItems}>
            <HeaderItem link="/" exact><FontAwesomeIcon icon={faFileInvoice} /> Home</HeaderItem>
            <HeaderItem link="/work-experience" exact><FontAwesomeIcon icon={faLaptop} /> Work</HeaderItem>
            <HeaderItem link="/stories" exact><FontAwesomeIcon icon={faCompass} /> Travel Stories</HeaderItem>
            <HeaderItem link="/resume" exact><FontAwesomeIcon icon={faFileInvoice} /> Resume</HeaderItem>
            <HeaderItem link="/feedback" exact><FontAwesomeIcon icon={faComments} /> Feedback</HeaderItem>
        </ul>
    );
};
export default Headeritems;