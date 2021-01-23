import HeaderItem from "../HeaderItem/HeaderItem.js";
import HeaderItemsCss from '../HeaderItems/Headeritems.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pdf from '../../../Assets/Documents/final.pdf';

import { faLaptop, faFileInvoice, faComments, faCompass } from '@fortawesome/free-solid-svg-icons'
const Headeritems = (props) => {
    return (
        <ul className={HeaderItemsCss.NavigationItems}>
            <HeaderItem link="/" exact><FontAwesomeIcon icon={faFileInvoice} /> Home</HeaderItem>
            <HeaderItem link="/work-experience" exact><FontAwesomeIcon icon={faLaptop} /> Work</HeaderItem>
            <HeaderItem link="/stories" exact><FontAwesomeIcon icon={faCompass} /> Travel Stories</HeaderItem>
            <HeaderItem link="/feedback" exact><FontAwesomeIcon icon={faComments} /> Feedback</HeaderItem>
            <HeaderItem link={Pdf} exact target="_blank"><FontAwesomeIcon icon={faFileInvoice} /> Resume</HeaderItem>
        </ul>
    );
};
export default Headeritems;