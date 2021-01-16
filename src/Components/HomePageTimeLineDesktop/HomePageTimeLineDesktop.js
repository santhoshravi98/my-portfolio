import Auxillary from "../../HOC/Auxillary/Auxillary";
import css from "../HomePageTimeLineDesktop/HomePageTimeLineDesktop.module.css";
import stanesSchoolPhoto from '../../Assets/Images/Stanes_School_Coonoor.jpg'
import stanesSchoolPhoto1 from '../../Assets/Images/Stanes_School_Coonoor1.png'
import cegPhoto from '../../Assets/Images/Annadurai_statue.jpg'
import xomePhoto from '../../Assets/Images/xome.jpg'
const HomePageTimeLineDesktop = (props) => {
    return (
        <Auxillary>
            <section className={css.timeline}>
                <div className={css.tlitem}>
                    <div
                        className={css.tlbg}
                        style={{
                            backgroundImage: `url(${stanesSchoolPhoto})`,
                        }}
                    ></div>

                    <div className={css.tlyear}>
                        <p>2013</p>
                    </div>

                    <div className={css.tlcontent}>
                        <h1>Stanes School Coonoor</h1>
                        <p>
                            Located in the hill top of Coonoor. Joined Stanes in 7'th Std and completed my High School. It's a Beautiful School with Beautiful Memories.
            </p>
                    </div>
                </div>

                <div className={css.tlitem}>
                    <div
                        className={css.tlbg}
                        style={{
                            backgroundImage: `url(${stanesSchoolPhoto1})`,
                        }}
                    ></div>

                    <div className={css.tlyear}>
                        <p className="f2 heading--sanSerif">2015</p>
                    </div>

                    <div className={css.tlcontent}>
                        <h1 className="f3 text--accent ttu">Stanes School Coonoor</h1>
                        <p>
                           Completed my Higher Secondary too in my Favourite School. Each and Every Place holds Million Memories.
            </p>
                    </div>
                </div>

                <div className={css.tlitem}>
                    <div
                        className={css.tlbg}
                        style={{
                            backgroundImage: `url(${cegPhoto})`,
                        }}
                    ></div>

                    <div className={css.tlyear}>
                        <p className="f2 heading--sanSerif">2019</p>
                    </div>

                    <div className={css.tlcontent}>
                        <h1 className="f3 text--accent ttu">College Of Engineering Guindy</h1>
                        <p>
                            Completed my Bachelors in Computer Science and Engineering in CEG. Learnt to Live Life, not Engineering. Words can't describe my beautiful college life. 
                            CEG Memories will remain forever.
            </p>
                    </div>
                </div>

                <div className={css.tlitem}>
                    <div
                        className={css.tlbg}
                        style={{
                            backgroundImage: `url(${xomePhoto})`,
                        }}
                    ></div>

                    <div className={css.tlyear}>
                        <p className="f2 heading--sanSerif">PRESENT</p>
                    </div>

                    <div className={css.tlcontent}>
                        <h1 className="f3 text--accent ttu">Xome</h1>
                        <p>
                           Software Developer in Xome India. Working in Online Auctions Engine for Properties in US. I like what I am doing and interested in learning new things
            </p>
                    </div>
                </div>
            </section>
        </Auxillary>
    );
};
export default HomePageTimeLineDesktop;
