import React from "react"
import ReactDOM from "react-dom"
import logo from "./logo.svg"

function Header() {
  return (
    <nav>
      <img src={logo} width="100px"  alt="react-logo" />
    </nav>
  )
}

function Title() {
  return (
    <h1> React features </h1>
  )
}

function Content() {
  return (
  <div>
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
    <footer>
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