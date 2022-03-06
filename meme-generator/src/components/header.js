import React from 'react'
import logo from '../logo.png'

function Header () {
    return (
        <header className="header">
            <div className="banner">
                <img className="logo" src={logo} alt="logo"/>
                <span className="title">Meme Generator</span>
            </div>
        </header>
    )
}

export default Header