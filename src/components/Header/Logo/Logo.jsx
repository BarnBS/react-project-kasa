import { Link } from 'react-router-dom'
import K_logo from './images_logo/K_logo.png'
import House_logo from './images_logo/House_logo.png'
import S_logo from './images_logo/S_logo.png'
import A_logo from './images_logo/A_logo.png'
 
function Logo() {
    return (
        <div>
            <Link to="/">
                <img src={K_logo} alt="logo" />
                <img src={House_logo} alt="logo" />
                <img src={S_logo} alt="logo" />
                <img src={A_logo} alt="logo" />
            </Link>
        </div>
    )
}

export default Logo