import React from "react";
import Auxillary from "../../HOC/Auxillary/Auxillary";
import css from "../HomePageHero/HomePageHero.module.css";
import {Row, Col} from 'react-bootstrap'
const HomePageHero = (props) => {
  return (
    <Auxillary>
      <header className={css.headerdesign}>
        <div className={css.listarmapbutton}>
          <div
            className={css.listarmapbuttontext}
            style={{ display: "inline-block", opacity: "1" }}
          >
            <span>Santhosh R </span>
          </div>
        </div>
        <div className={css.footerwave}></div>
      </header>
      <div className={css.pset}>
	<div className={css.container}>
		<Row className={css.listarfeatureitems}>
			<Col xs={12} sm={6} md={4} className={[css.listarfeatureitemwrapper,css.listarfeaturewithimage,css.listarheightchanged]} data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
				<div className={[css.listarfeatureitem,css.listarfeaturehaslink]}>
					<a href="https://bit.ly/3aX1PHf" target="_blank"></a>
					<div className={css.listarfeatureiteminner}>
						<div className={css.listarfeaturerightborder}></div>
						<div className={css.listarfeatureblockcontentwrapper}>
							<div className={css.listarfeatureiconwrapper}>
								<div className={css.listarfeatureiconinner}>
									<div>
										<img alt="Businesses" className={css.listarimageicon} src="https://image.flaticon.com/icons/svg/1899/1899582.svg"/>
										</div>
									</div>
								</div>
								<div className={css.listarfeaturecontentwrapper} style={{paddingTop: "0px"}}>
									<div className={[css.listarfeatureitemtitle,css.listarfeaturecounteradded]}>
										<span>
											<span>01</span>
                    Businesses 
										</span>
									</div>
									<div className={css.listarfeatureitemexcerpt}>
                  Start publish listings to show everyone the details and goodies of your establishment. </div>
								</div>
							</div>
						</div>
					</div>
					<div className={[css.listarfeaturefixbottompadding,css.listarfixfeaturearrowbuttonheight]}></div>
          </Col>
          <Col xs={12} sm={6} md={4} className={[css.listarfeatureitemwrapper,css.listarfeaturewithimage,css.listarheightchanged]} data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
					<div className={[css.listarfeatureitem,css.listarfeaturehaslink]}>
						<a href="https://bit.ly/3aX1PHf" target="_blank"></a>
						<div className={css.listarfeatureiteminner}>
							<div className={css.listarfeaturerightborder}></div>
							<div className={css.listarfeatureblockcontentwrapper}>
								<div className={css.listarfeatureiconwrapper}>
									<div className={css.listarfeatureiconinner}>
										<div>
											<img alt="Customers" className={css.listarimageicon}  src="https://image.flaticon.com/icons/svg/1899/1899506.svg"/>
											</div>
										</div>
									</div>
									<div className={css.listarfeaturecontentwrapper} style={{paddingTop: "0px"}}>
										<div className={[css.listarfeatureitemtitle,css.listarfeaturecounteradded]}>
											<span>
												<span>02</span>
                    Customers 
											</span>
										</div>
										<div className={css.listarfeatureitemexcerpt}>
                  Easily find interesting places by local experts, save time by checking listing features. </div>
									</div>
								</div>
							</div>
						</div>
						<div className={[css.listarfeaturefixbottompadding,css.listarfixfeaturearrowbuttonheight]}></div>
            </Col>
          <Col xs={12} sm={6} md={4} className={[css.listarfeatureitemwrapper,css.listarfeaturewithimage,css.listarheightchanged]} data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
          <div className={[css.listarfeatureitem,css.listarfeaturehaslink]}>
							<a href="https://bit.ly/3aX1PHf" target="_blank"></a>
              <div className={css.listarfeatureiteminner}>
							<div className={css.listarfeaturerightborder}></div>
							<div className={css.listarfeatureblockcontentwrapper}>
								<div className={css.listarfeatureiconwrapper}>
									<div className={css.listarfeatureiconinner}>
											<div>
												<img alt="Feedback" className="listar-image-icon" src="https://image.flaticon.com/icons/svg/1899/1899604.svg"/>
												</div>
											</div>
										</div>
										<div className={css.listarfeaturecontentwrapper} style={{paddingTop: "0px"}}>
										<div className={[css.listarfeatureitemtitle,css.listarfeaturecounteradded]}>
												<span>
													<span>03</span>
                    Feedback 
												</span>
											</div>
                      <div className={css.listarfeatureitemexcerpt}>
                  Visitors discuss listings to share experiences, so businesses get reputation consolidated. </div>
										</div>
									</div>
								</div>
							</div>
							<div className={[css.listarfeaturefixbottompadding,css.listarfixfeaturearrowbuttonheight]}></div>
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