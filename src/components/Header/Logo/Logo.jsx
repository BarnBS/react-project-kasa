import { Link } from 'react-router-dom'
import "./Logo.css"

import K_logo from './images_logo/K_logo.png'
import House_logo from './images_logo/House_logo.png'
import S_logo from './images_logo/S_logo.png'
import A_logo from './images_logo/A_logo.png'
 
function Logo() {
    return (
        <Link to="/">
            <div className ="logo">
                <img src={K_logo} alt="logo" />
                <img src={House_logo} alt="logo" className="house_logo"/>
                <img src={S_logo} alt="logo" />
                <img src={A_logo} alt="logo" />
            </div>
        </Link>
    )
}

export default Logo