import React, { Component } from 'react';
import classNames from 'classnames';
import StoriesImageSlider from '../Stories/StoriesImageSlider/StoriesImageSlider'
import StoriesImageHexagon from '../../Components/StoriesImageHexagon/StoriesImageHexagon'
import Auxillary from '../../HOC/Auxillary/Auxillary'
class StoriesHomePage extends Component {
    render() {
        return (
            <Auxillary>
                <StoriesImageSlider/>
                <StoriesImageHexagon/>
            </Auxillary>
        )
    }
}

export default StoriesHomePage;