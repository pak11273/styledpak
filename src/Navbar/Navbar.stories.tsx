import { Flex, Link } from "../index"

import Navbar from "./Navbar"
// Generated with util/create-component.js
import React from "react"
import { storiesOf } from "@storybook/react"

export default {
  title: "Navbar",
}

storiesOf("Navbar", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Navbar />
    </div>
  ))
  .add("with props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Navbar>
        <Link {...{ bg: "red" }}>Logo Button</Link>
        <Link {...{ bg: "red" }}>item 1</Link>
        <Link {...{ bg: "green" }}>item 2</Link>
        <Link {...{ bg: "blue" }}>item 3</Link>
      </Navbar>
    </div>
  ))
