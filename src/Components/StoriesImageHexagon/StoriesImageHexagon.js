import css from '../StoriesImageHexagon/StoriesImageHexagon.module.css'
import Auxillary from '../../HOC/Auxillary/Auxillary'
import hex1 from '../../Assets/Images/hex1.jpg'
import hex2 from '../../Assets/Images/hex2.jpg'
import hex3 from '../../Assets/Images/hex3.jpg'
import hex4 from '../../Assets/Images/hex4.jpg'
import hex5 from '../../Assets/Images/hex5.jpg'
import hex6 from '../../Assets/Images/hex6.jpg'
import hex7 from '../../Assets/Images/hex7.jpg'
import hex8 from '../../Assets/Images/hex8.jpg'
import hex9 from '../../Assets/Images/hex9.jpg'
const StoriesImageHexagon = (props) => {
    return (
        <Auxillary>
            <ul id={css.categories} className={css.clr}>
                <li className={css.pusher}></li>
                <li>
                    <div>
                        <img src={hex1} alt="Khujey Self Image" />
                        <h1>Khujey 9395 Feet</h1>
                        <p>A smile to celebrate the success of reaching Khujey Camp. Oxygen Levels Normal and Survival Day One</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={hex2} alt="Trio Selfie" />
                        <h1>Selfie to Kick Start</h1>
                        <p>A Ready to go face before the start. Surprises on all faces to see the Snow Blanket.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={hex3} alt="Himalayan Sunrise" />
                        <h1>Bliss Sunrise</h1>
                        <p>What a Pleasant Sight. This was the best view captured and will stay in our hearts forever and ever and ever...</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={hex4} alt="Game Of Thrones Image" />
                        <h1 >With WhiteWalkers</h1>
                        <p >This place was so intense and reminded of the White Walkers from Game Of Thrones.</p>
                    </div>
                </li>
                <li className={css.pusher}></li>
                <li>
                    <div>
                        <img src={hex5} alt="Group Selfie" />
                        <h1>Tired Faces</h1>
                        <p>Mid of the Trails where we started to exhaust out and finally somehow managed to click a Groupie.</p>
                    </div>
                </li>

                <li>
                    <div>
                        <img src={hex6} alt="Kedarkantha Snow Bridge" />
                        <h1>Identity the Bridge here ?</h1>
                        <p>This was so marvelous  we were completely awestruck by the scene.</p>
                    </div>
                </li>
                <li className={css.pusher}></li>
                <li>
                    <div>
                        <img src={hex7} alt="India Gate" />
                        <h1>India Gate</h1>
                        <p>A Cool Breezy morning visit to the Historious India Gate.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={hex8} alt="Group Selfie" />
                        <h1>On Straight Line</h1>
                        <p>The Squad following the exact straight path with pit stops and fairy tales.</p>
                    </div>
                </li><li>
                    <div>
                        <img src={hex9} alt="So Called Silhoutte" />
                        <h1>So Called Poser</h1>
                        <p>With Snow Balnket behind my back and just wanted to freeze the moment.</p>
                    </div>
                </li>
            </ul>
        </Auxillary>
    )
}
export default StoriesImageHexagon;