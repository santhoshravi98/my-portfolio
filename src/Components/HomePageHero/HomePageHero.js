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
        <div className={css.footerwave}></div>
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
                      <div className={css.listarfeatureiconinner}></div>
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
                            {" "}
                            <FontAwesomeIcon icon={faSmile} />
                          </span>
                          Quick Introduction
                        </span>
                      </div>
                      <div className={css.listarfeatureitemexcerpt}>
                        Start publish listings to show everyone the details and
                        goodies of your establishment.
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
                      <div className={css.listarfeatureiconinner}>
                        <div>
                          <img
                            alt="Customers"
                            className={css.listarimageicon}
                            src="https://image.flaticon.com/icons/svg/1899/1899506.svg"
                          />
                        </div>
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
                          Customers
                        </span>
                      </div>
                      <div className={css.listarfeatureitemexcerpt}>
                        Easily find interesting places by local experts, save
                        time by checking listing features.{" "}
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
                      <div className={css.listarfeatureiconinner}>
                        <div>
                          <img
                            alt="Feedback"
                            className="listar-image-icon"
                            src="https://image.flaticon.com/icons/svg/1899/1899604.svg"
                          />
                        </div>
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
                          Feedback
                        </span>
                      </div>
                      <div className={css.listarfeatureitemexcerpt}>
                        Visitors discuss listings to share experiences, so
                        businesses get reputation consolidated.{" "}
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
