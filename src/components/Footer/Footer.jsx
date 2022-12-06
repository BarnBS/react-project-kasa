import React from "react";

import K_logo from "../Header/Logo/images_logo/K_logo.png"
import House_logo from "../Header/Logo/images_logo/House_logo.png"
import S_logo from "../Header/Logo/images_logo/S_logo.png"
import A_logo from "../Header/Logo/images_logo/A_logo.png"

import "./Footer.css"

//Returns the footer with logo and copyrights claim
function Footer() {
    return <footer>
        <div>
            <img src={K_logo} alt="logo" />
            <img src={House_logo} alt="logo" className="house_logo"/>
            <img src={S_logo} alt="logo" />
            <img src={A_logo} alt="logo" />
        </div>
        <p>© 2020 Kasa. All rights reserved </p>
    </footer>
}

export default Footer