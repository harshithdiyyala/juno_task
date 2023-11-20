import { Component } from "react";

import './index.css'

class TopBar extends Component {


    render() {

        let {category} = this.props 
        
        category = category === 'source' ? 'Source Of Income' : category
        category = category === 'uar' ? 'UAR' : category

        return(<div className="top-bar-container">
            <h1>{category}</h1>
        </div>)
    }
}

export default TopBar