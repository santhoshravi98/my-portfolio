import React, { Component } from 'react';
import classNames from 'classnames';
import './StoriesImageSlider.css';
import cover1 from '../../../Assets/Images/cover1.jpg'
import cover2 from '../../../Assets/Images/cover2.jpg'
import cover3 from '../../../Assets/Images/cover3.jpg'
import cover4 from '../../../Assets/Images/cover4.jpeg'
import cover5 from '../../../Assets/Images/cover5.jpeg'

class StoriesImageSlider extends Component {
    constructor(props) {
        super(props);

        this.IMAGE_PARTS = 4;

        this.changeTO = null;
        this.AUTOCHANGE_TIME = 4000;

        this.state = {
            activeSlide: -1, prevSlide: -1, sliderReady: false, slides: [
                {
                    city: 'Himalayas ',
                    country: 'Kedarkantha Trails',
                    img: cover1,
                    description:"This Journery is our Life Time Experience"
                },
                {
                    city: 'paradise',
                    country: "kedarkantha snow",
                    img: cover2,
                },
                {
                    city: 'Kothgoan',
                    country: 'Base Camp',
                    img: cover3,
                },
                {
                    city: 'Squad',
                    country: 'The',
                    img: cover4,
                },
                {
                    city: 'Batch',
                    country: 'The',
                    img: cover5,
                },
            ]
        };
    }

    componentWillUnmount() {
        window.clearTimeout(this.changeTO);
    }

    componentDidMount() {
        this.runAutochangeTO();
        setTimeout(() => {
            this.setState({ activeSlide: 0, sliderReady: true });
        }, 0);
    }

    runAutochangeTO() {
        this.changeTO = setTimeout(() => {
            this.changeSlides(1);
            this.runAutochangeTO();
        }, this.AUTOCHANGE_TIME);
    }

    changeSlides(change) {
        window.clearTimeout(this.changeTO);
        const { length } = this.state.slides;
        const prevSlide = this.state.activeSlide;
        let activeSlide = prevSlide + change;
        if (activeSlide < 0) activeSlide = length - 1;
        if (activeSlide >= length) activeSlide = 0;
        this.setState({ activeSlide, prevSlide });
    }

    render() {
        const { activeSlide, prevSlide, sliderReady } = this.state;
        return (
            <div className={classNames('slider', { 's--ready': sliderReady })}>
                <p className="slider__top-heading">Travel Dairies</p>
                <div className="slider__slides">
                    {this.state.slides.map((slide, index) => (
                        <div
                            className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index })}
                            key={slide.city}
                        >
                            <div className="slider__slide-content">
                                <h3 className="slider__slide-subheading">{slide.country || slide.city}</h3>
                                <h2 className="slider__slide-heading">
                                    {slide.city.split('').map(l => <span>{l}</span>)}
                                </h2>
                                <p className="slider__slide-readmore">{slide.description}</p>
                            </div>
                            <div className="slider__slide-parts">
                                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                                    <div className="slider__slide-part" key={i}>
                                        <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="slider__control" onClick={() => this.changeSlides(-1)} />
                <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
            </div>
        );
    }
}
export default StoriesImageSlider;