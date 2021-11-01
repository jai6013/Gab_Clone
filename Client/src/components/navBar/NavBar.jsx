import './NavBar.css';

import React from 'react'
import Logo from './Logo';
import Button from './button';

function NavBar() {
    return (
        
        <div className="navBox">
            <div className="leftAligned">
                <Logo />
                <input className="inputfield" placeholder="Search Gab" />
            </div>
            <div className="rightAligned">
            <Button/>
            </div>
        </div>
        
    )
}

export default NavBar



