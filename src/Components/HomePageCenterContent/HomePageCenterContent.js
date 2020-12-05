import React from "react";
import Auxillary from "../../HOC/Auxillary/Auxillary";
import css from "../HomePageCenterContent/HomePageCenterContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HomePageCenterContent = (props) => {
  return (
    <Auxillary>
      <section className={css.csection}>
        <h2 className={css.csectiontitle}>
          <span>Our Services</span>
        </h2>
        <ul className={css.cservices}>
          <li className={css.cservicesitem}>
            <h3>Responsive Wseb Design</h3>
            <p>
              We leverage the concept of mobile-first design. Through our work,
              we focus on designing an experience that works across different
              screen sizes.
            </p>
          </li>
          <li className={css.cservicesitem}>
            <h3>UX Auditing</h3>
            <p>
              If you are unsure of how your app behaves, we can help by doing a
              detailed UX audit that will highlight most of the issues in your
              product. From there, we can take it further and fix all issues.
            </p>
          </li>
          <li className={css.cservicesitem}>
            <h3>Front End Development</h3>
            <p>
              We are Front End masters with a deep focus on HTML, CSS. The
              result of our work is a responsive, accessible, and performant
              websites. Either you have the design ready and want us to code it,
              or you want us to do both design and code
              to do so.</p>
          </li>
          <li className={css.cservicesitem}>
            <h3>UX Consultation</h3>
            <p>
              If you don&rsquo;t know what kind of service to request from us,
              don&rsquo;t worry. We can help and see what fits your business and
              your budget.
            </p>
          </li>
          <li className={css.cservicesitem}>
            <h3>Mobile Apps Design</h3>
            <p>
              To reach more customers and the goals of your business, a mobile
              application is necessary these days. We will work on the app
              design from scratch to final tested prototype.
            </p>
          </li>
          <li className={css.cservicesitem}>
            <h3>UX Research</h3>
            <p>
              It&rsquo;s important to research deeply for the product you want
              to build. We help in that by defining the user audience, working
              on user stories, competitive analysis and much more.{" "}
            </p>
          </li>
        </ul>
      </section>
    </Auxillary>
  );
};
export default HomePageCenterContent;
