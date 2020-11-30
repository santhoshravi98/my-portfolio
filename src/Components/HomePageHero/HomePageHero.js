import React from "react";
import Auxillary from "../../HOC/Auxillary/Auxillary";
import css from "../HomePageHero/HomePageHero.module.css";
const HomePageHero = (props) => {
  return (
    <Auxillary>
      <div className={css.container}>
        <div className={css.row}>
          <div className={css.col-sm-12}>
            <div className={css.hero}>
              <div className={css.hero__text}>
                <h1 className={[css.hero__title, css.text-center]}>
                  Santhosh R
                </h1>
                <p className={[css.hero__sub, css.text-center]}>
                  Textile Designer + Artist
                </p>
                <div className={css.hero__underline}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Auxillary>
  );
};
export default HomePageHero;
