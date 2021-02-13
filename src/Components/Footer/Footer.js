import Auxillary from "../../HOC/Auxillary/Auxillary";
import css from "../Footer/Footer.module.css";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
  return (
    <Auxillary>
      <footer className={css.sitefooter} id="Master_Footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About this Site</h6>
              <p className="text-justify">
                This site is assembled from different web sources. Tools used include React, Redux, CSS. Have used several plugins to support several features in React. These include CSS Modules, React-Bootstrap, Css-module-class-lister, fortawesome/free-brands-svg-icons,..etc
                Firebase is used as a source of Data Storage. I am happy to share the list of all site references that I used. (Click here). Ping me if you have any questions or Feedback.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Future Plans</h6>
              <ul className={css.footerlinks}>
                <li>
                  Chat Bot
                </li>
                <li>
                  Live Notifications
                </li>
                <li>
                  Automated Mail Response
                </li>
                <li>
                  Analytics Charts
                </li>
                <li>
                  Interactive Responsive Design
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className={css.footerlinks}>
                <li>
                  <a href="/work-experience">Work</a>
                </li>
                <li>
                  <a href="/stories">Travel Stories</a>
                </li>
                <li>
                  <a href="/resume">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="/feedback">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="/">Home</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className={css.copyrighttext}>
                Copyright &copy; 2021 No Rights Reserved.
                <a href="/#">Thanks</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className={css.socialicons}>
                <li>
                  <a className="facebook" href="https://www.facebook.com/rsanthosh411998/" rel="noopener noreferrer" target="_blank">
                    {" "}
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="/#" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="https://www.instagram.com/invites/contact/?i=1xan13ua2xdjb&utm_content=yy6lc5" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="https://www.linkedin.com/in/santhosh-ravi-380565137/" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="https://github.com/santhoshravi98/" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Auxillary>
  );
};
export default Footer;
