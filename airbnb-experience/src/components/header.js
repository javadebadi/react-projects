import React from 'react'
import logo from '../images/logo.png'

function Header() {
    return (
        <header className="header">
            <div>
                <img className="logo-img" src={logo} alt="logo" />
            </div>
        </header>
    )
}

export default Header