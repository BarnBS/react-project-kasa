import React from 'react';

import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

import "./Header.css"

function Header () {
    return (
    <header>
        <Logo/>
        <Navbar/>
    </header>
    )
}

export default Header