import react, { Component } from 'react'
import Auxillary from '../../../HOC/Auxillary/Auxillary'
import Work from '../Work'
class WorkHomePage extends Component {
    render() {
        return (
            <Auxillary>
                <Work />
            </Auxillary>
        )
    }
}
export default WorkHomePage;