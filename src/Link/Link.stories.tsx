import { Link } from "../index"
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { storiesOf } from "@storybook/react"

export default {
  title: "Link",
}

storiesOf("Link", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Router>
        <Link to="#">link</Link>
      </Router>
    </div>
  ))
  .add("with props", () => {
    const onClick = () => alert("hi")
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Router>
          <Link to="#" onClick={onClick} {...{ fontSize: 60 }}>
            link with props
          </Link>
        </Router>
      </div>
    )
  })
