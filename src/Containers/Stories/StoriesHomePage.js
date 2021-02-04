import React, { Component } from 'react';
import StoriesImageSlider from '../Stories/StoriesImageSlider/StoriesImageSlider'
import StoriesImageHexagon from '../../Components/StoriesImageHexagon/StoriesImageHexagon'
import Auxillary from '../../HOC/Auxillary/Auxillary'
class StoriesHomePage extends Component {
    componentDidMount() {
        var Footer = document.getElementById("Master_Footer");
        Footer.style.display = "block";
    }
    render() {
        return (
            <Auxillary>
                <StoriesImageSlider />
                <StoriesImageHexagon />
            </Auxillary>
        )
    }
}

export default StoriesHomePage;