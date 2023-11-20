import { Component } from "react";

import './index.css'
import SideBar from "../SideBar";
import TopBar from "../TopBar";


class Layout extends Component {

    render() {
        const {item} = this.props;
        

        return(<div className="app-container">
            <div className="side-bar-container">
            <SideBar category = {item}/>
            </div>
            <div className="content-container">
                <TopBar category = {item}/>
                <div className="content-details-container">{this.props.children}</div>
            </div>
        </div>)
    }
}

export default Layout