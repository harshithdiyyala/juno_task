import {Component} from 'react'
import LogoImage from '../images/logo.png'
import {withRouter,Link} from 'react-router-dom'
import { GrOverview } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { CiMonitor } from "react-icons/ci";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaPenToSquare } from "react-icons/fa6";

import profileImage from '../images/profile_image.jpg'
import './index.css'

class SideBar extends Component {


    render() {
        const {category} = this.props;
        
;        return(<div className='side-bar'>

           <div className='side-bar-logo'>
                <img src ={LogoImage} alt ='logo'/>
                <h1>Juno</h1>
           </div>
            
            <div className='side-bar-titles'>
                <Link to ='/'  className={`link`}>
                    <h1 className= {`category ${category === 'Overview' ? 'highlight':''}`}>Overview</h1>
                     <h1 className={`icon ${category === 'Overview' ? 'highlight':''}`}><GrOverview/></h1>   
                    </Link>
                <Link to ='/onboarding' className={`link `}>
                    <h1 className= {`category ${category === 'Onboarding' ? 'highlight':''}`}>Onboarding</h1>
                    <h1 className= {`icon ${category === 'Onboarding' ? 'highlight':''}`}><MdOutlineDashboard/></h1>
                    </Link>
                <Link to = '/monitoring' className={`link `}>
                    <h1 className= {`category ${category === 'Monitoring' ? 'highlight':''}`}>Monitoring</h1>
                    <h1 className= {`icon ${category === 'Monitoring' ? 'highlight':''}`}> <CiMonitor/></h1>
                    </Link>
                <Link to = '/flagging' className={`link `}>
                     <h1 className= {`category ${category === 'Flagging' ? 'highlight':''}`}>Flagging</h1>
                     <h1 className= {`icon ${category === 'Flagging' ? 'highlight':''}`}><FaFontAwesomeFlag/></h1>
                     </Link>        
                <Link to ='/source' className={`link `}>
                    <h1 className= {`category ${category === 'source' ? 'highlight':''}`}>Source Of Income</h1>
                    <h1 className= {`icon ${category === 'source' ? 'highlight':''}`}><GiTakeMyMoney/></h1>
                    </Link>
                <Link to ='/uar' className={`link`}>
                    <h1 className= {`category ${category === 'uar' ? 'highlight':''}`}>UAR</h1>
                    <h1 className= {`icon ${category === 'uar' ? 'highlight':''}`}> <FaPenToSquare/></h1>
                    </Link>
            </div>

            
            <div className='side-bar-details-container'>

                <div className='profile-img-container'>
                    <img src ={profileImage} alt = 'profile' className='profile-image'/>
                </div>
                <div className='profile-details-container'>
                    <h1 className='profile-name'>Elon Musk</h1>
                    <h1 className='profile-email'>elon@twitter.com</h1>
                </div>
            </div>
        </div>)
    }
}

export default withRouter(SideBar)