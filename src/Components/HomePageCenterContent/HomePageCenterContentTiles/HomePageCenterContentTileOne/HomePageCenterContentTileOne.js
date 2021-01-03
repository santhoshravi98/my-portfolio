import React from "react";
import Auxillary from "../../../../HOC/Auxillary/Auxillary";
import css from '../HomePageCenterContentTileOne/HomePageCenterContentTileOne.module.css'
const HomePageCenterContentOne = (props) => {
  return (
    <Auxillary>
      <li className={css.cservicesitem}>
        <h3>My Suggestions/Favourites</h3>
        <p>
         I always will to share my thoughts. Series that I suggest include Game of Thrones, Breaking Bad, Peaky Blinders, Stranger Things. <a href="https://www.youtube.com/user/marquesbrownlee" target="_blank" rel="noopener noreferrer">MKBHD</a> is my fav.Tech Guy in Youtube. <a href="https://www.google.com/search?q=maximilian+schwarzm%C3%BCller&rlz=1C1GCEU_en-GBIN912IN912&oq=max&aqs=chrome.1.69i57j69i59.1717j0j1&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">Maximilian Schwarzmüller</a> is one Tutor whom I always Inspire. My favourite movies list is very big to post, Ping me Let's Discuss.
        </p>
      </li>
    </Auxillary>
  );
};
export default HomePageCenterContentOne;
