import React from "react"
import logo from "../logo.svg"

function Header() {
  return (
    <nav className="nav">
      <img src={logo} alt="react-logo" />
      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  )
}

export default Header