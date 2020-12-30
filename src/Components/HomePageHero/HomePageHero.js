import React from "react";
import Auxillary from "../../HOC/Auxillary/Auxillary";
import css from "../HomePageHero/HomePageHero.module.css";
import { Row, Col } from "react-bootstrap";
import classLister from "css-module-class-lister";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faSmileWink,
  faGrin,
  faIdCardAlt,
  faHandshake,
  faBug,
  faGrinSquintTears
} from "@fortawesome/free-solid-svg-icons";
const classes = classLister(css);
const HomePageHero = (props) => {
  return (
    <Auxillary>
      <header className={css.headerdesign}>
        <div className={css.listarmapbutton}>
          <div
            className={css.listarmapbuttontext}
            style={{ display: "inline-block", opacity: "1" }}
          >
            <span>
              <FontAwesomeIcon icon={faIdCardAlt} /> Santhosh R{" "}
            </span>
          </div>
        </div>
      </header>
      <div className={css.pset}>
        <div className="container">
          <Row className={classes(css.listarfeatureitems, "show-grid")}>
            <Col
              xs={12}
              sm={6}
              md={4}
              className={classes(
                css.listarfeatureitemwrapper,
                css.listarfeaturewithimage,
                css.listarheightchanged
              )}
              data-aos="fade-zoom-in"
              data-aos-group="features"
              data-line-height="25.2px"
            >
              <div
                className={classes(
                  css.listarfeatureitem,
                  css.listarfeaturehaslink
                )}
              >
                <a href="https://bit.ly/3aX1PHf" target="_blank"></a>
                <div className={css.listarfeatureiteminner}>
                  <div className={css.listarfeaturerightborder}></div>
                  <div className={css.listarfeatureblockcontentwrapper}>
                    <div className={css.listarfeatureiconwrapper}>
                      <div className={css.listarfeatureiconinnerone}></div>
                    </div>
                    <div
                      className={css.listarfeaturecontentwrapper}
                      style={{ paddingTop: "0px" }}
                    >
                      <div
                        className={classes(
                          css.listarfeatureitemtitle,
                          css.listarfeaturecounteradded
                        )}
                      >
                        <span>
                          <span>
                            <FontAwesomeIcon icon={faSmile} />
                          </span>
                          Quick Introduction
                        </span>
                      </div>
                      <div className={css.listarfeatureitemexcerpt}>
                        First of all Thanks for Checking In <FontAwesomeIcon icon={faHandshake} />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={classes(
                  css.listarfeaturefixbottompadding,
                  css.listarfixfeaturearrowbuttonheight
                )}
              ></div>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={4}
              className={classes(
                css.listarfeatureitemwrapper,
                css.listarfeaturewithimage,
                css.listarheightchanged
              )}
              data-aos="fade-zoom-in"
              data-aos-group="features"
              data-line-height="25.2px"
            >
              <div
                className={classes(
                  css.listarfeatureitem,
                  css.listarfeaturehaslink
                )}
              >
                <a href="https://bit.ly/3aX1PHf" target="_blank"></a>
                <div className={css.listarfeatureiteminner}>
                  <div className={css.listarfeaturerightborder}></div>
                  <div className={css.listarfeatureblockcontentwrapper}>
                    <div className={css.listarfeatureiconwrapper}>
                      <div className={css.listarfeatureiconinnertwo}>
                      </div>
                    </div>
                    <div
                      className={css.listarfeaturecontentwrapper}
                      style={{ paddingTop: "0px" }}
                    >
                      <div
                        className={classes(
                          css.listarfeatureitemtitle,
                          css.listarfeaturecounteradded
                        )}
                      >
                        <span>
                          <span>
                            <FontAwesomeIcon icon={faSmileWink} />
                          </span>
                          What I Do
                        </span>
                      </div>
                      <div className={css.listarfeatureitemexcerpt}>
                        I am a Software Engineer by Profession and specialised in making Bugs <FontAwesomeIcon icon={faBug} />
                        Learning new things and have a list of TODO(will update here soon).
                        <p>
                          Note : You can also help me in any means
                        </p>
                        .....
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={classes(
                  css.listarfeaturefixbottompadding,
                  css.listarfixfeaturearrowbuttonheight
                )}
              ></div>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={4}
              className={classes(
                css.listarfeatureitemwrapper,
                css.listarfeaturewithimage,
                css.listarheightchanged
              )}
              data-aos="fade-zoom-in"
              data-aos-group="features"
              data-line-height="25.2px"
            >
              <div
                className={classes(
                  css.listarfeatureitem,
                  css.listarfeaturehaslink
                )}
              >
                <a href="https://bit.ly/3aX1PHf" target="_blank"></a>
                <div className={css.listarfeatureiteminner}>
                  <div className={css.listarfeaturerightborder}></div>
                  <div className={css.listarfeatureblockcontentwrapper}>
                    <div className={css.listarfeatureiconwrapper}>
                      <div className={css.listarfeatureiconinnerthree}>
                      </div>
                    </div>
                    <div
                      className={css.listarfeaturecontentwrapper}
                      style={{ paddingTop: "0px" }}
                    >
                      <div
                        className={classes(
                          css.listarfeatureitemtitle,
                          css.listarfeaturecounteradded
                        )}
                      >
                        <span>
                          <span>
                            <FontAwesomeIcon icon={faGrin} />
                          </span>
                          About this Site
                        </span>
                      </div>
                      <div className={css.listarfeatureitemexcerpt}>
                        I just wanted to try this out because WHY NOT ?
                        Contains Personal Information, Stories and blah blah blah. <FontAwesomeIcon icon={faGrinSquintTears} />
                        <p>Please feel free to contact me for posting your valuable content which could be useful to the society.
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={classes(
                  css.listarfeaturefixbottompadding,
                  css.listarfixfeaturearrowbuttonheight
                )}
              ></div>
            </Col>
          </Row>
        </div>
      </div>
    </Auxillary>
  );
};
export default HomePageHero;

//https://codepen.io/uiswarup/full/ExjrZzV
//https://medium.com/@julianajlk/grids-rows-and-columns-in-react-bootstrap-c36a703c3c45
