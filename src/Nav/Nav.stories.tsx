import { Box, Nav } from "../index"

import { Link } from "../index"
import React from "react"
import { storiesOf } from "@storybook/react"

export default {
  title: "Nav",
}

storiesOf("Nav", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Nav>base nav</Nav>
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
      <h1>Nav with props</h1>
      <Nav>
        {/* <Box {...{ bg: "red" }}>Logo Button</Box> */}
        <Link {...{ bg: "red" }} to="#">
          item 1
        </Link>
        <Link {...{ bg: "green" }} to="#">
          item 1
        </Link>
        <Link {...{ bg: "blue" }} to="#">
          item 1
        </Link>
      </Nav>
    </div>
  ))
