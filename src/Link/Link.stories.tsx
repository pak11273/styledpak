import { Link } from "./Link"
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { storiesOf } from "@storybook/react"

export default {
  title: "Link",
}

// export const Base = () => <Link to="https://google.com">base link</Link>
storiesOf("Link", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Router>
        <a href="https://google.com" color="green">
          blah
        </a>
        <Link to="https://google.com" color="green">
          base link
        </Link>
      </Router>
    </div>
  ))
  .add("with props", () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Router>
        <Link to="https://google.com">base link</Link>
      </Router>
    </div>
  ))
