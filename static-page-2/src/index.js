import React from "react"
import ReactDOM from "react-dom"
import logo from "./logo.svg"

const page = (
  <div>
    <img src={logo} width="100px"  alt="react-logo" />
    <h1>React features</h1>
    <ul>
      <li>First created at 2013</li>
      <li>Is maintained by Facebook</li>
      <li>Powered thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)

ReactDOM.render(
  page,
  document.getElementById("root")
)