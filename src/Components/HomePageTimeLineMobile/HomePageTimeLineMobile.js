import Auxillary from "../../HOC/Auxillary/Auxillary";
import css from "../HomePageTimeLineMobile/HomePageTimeLineMobile.module.css";
const HomePageTimeLineMobile = (props) => {
  return (
    <Auxillary>
        <div className="timeLineMobile">
      <div className={css.timelinecontent}>
        <h1>Timeline</h1>

        <ul className={css.timeline}>
          <li class="event" data-date="65Million B.C.">
            <h3>Dinosaurs Roamed the Earth</h3>
            <p>RAWWWWWWRRR 🐢🦂</p>
          </li>
          <li className={css.event} data-date="2005">
            <h3>Creative Component Launched</h3>
            <p>"We can be all things to all people!" 📣</p>
          </li>
          <li className={css.event} id="date" data-date="2009">
            <h3>Squareflair was Born</h3>
            <p></p> <p>"We can be all things to Squarespace users!" 📣</p>
          </li>
        </ul>
      </div>
      </div>
    </Auxillary>
  );
};
export default HomePageTimeLineMobile;
