import react from 'react'
import css from '../StoriesImageHexagon/StoriesImageHexagon.module.css'
import Auxillary from '../../HOC/Auxillary/Auxillary'
const StoriesImageHexagon = (props) => {
    return (
        <Auxillary>
            <ul id={css.categories} className={css.clr}>
                <li className={css.pusher}></li>
                <li>
                    <div>
                        <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" alt="" />
                        <h1>This is a title a bit longer</h1>
                        <p>Some sample text about the article this hexagon leads to</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                        <h1>This is a title</h1>
                        <p>Some sample text about the article this hexagon leads to</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                        <h1>This is a title</h1>
                        <p>Some sample text about the article this hexagon leads to</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
                        <h1>This is a title</h1>
                        <p>Some sample text about the article this hexagon leads to</p>
                    </div>
                </li>
                <li className={css.pusher}></li>
                <li>
                    <div>
                        <img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt="" />
                        <h1>This is a title</h1>
                        <p>Some sample text about the article this hexagon leads to</p>
                    </div>
                </li>

                <li>
                    <div>
                        <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
                        <h1>This is a title</h1>
                        <p>Some sample text about the article this hexagon leads to</p>
                    </div>
                </li>
                <li className={css.pusher}></li>
                <li>
                    <div>
                        <img src="https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg" alt="" />
                        <h1>This is a title</h1>
                        <p>Some sample text about the article this hexagon leads to</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
                        <h1>This is a title</h1>
                        <p>Some sample text about the article this hexagon leads to</p>
                    </div>
                </li><li>
                    <div>
                        <img src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg" alt="" />
                        <h1>This is a title</h1>
                        <p>Some sample text about the article this hexagon leads to</p>
                    </div>
                </li>
            </ul>
        </Auxillary>
    )
}
export default StoriesImageHexagon;