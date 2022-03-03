import React from "react"
import ReactDOM from "react-dom"
import logo from "./logo.svg"
import "./style.css"

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

function Title() {
  return (
    <h1 className="title"> React features </h1>
  )
}

function Content() {
  return (
  <div className="content">
    <ul>
      <li>First created at 2013</li>
      <li>Is maintained by Facebook</li>
      <li>Powered thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <small>Javad Ebadi, All rights are reservered.</small>
    </footer>
  )
}


function Page() {
  return (
    <div>
    <Header />
    <Title />
    <Content />
    <Footer />
    </div>
  )
}

ReactDOM.render(
  <Page />,
  document.getElementById("root")
)