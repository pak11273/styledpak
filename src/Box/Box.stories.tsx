import {
  boolean,
  color,
  number,
  object,
  select,
  text,
} from "@storybook/addon-knobs"

import Box from "./Box"
import React from "react"
import { storiesOf } from "@storybook/react"

export default {
  title: "Box",
}

storiesOf("Box", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box>base box</Box>
    </div>
  ))
  .add("with responsive widths", () => (
    <div
      style={{ background: "black", display: "flex", justifyContent: "center" }}
    >
      <Box
        bg="tomato"
        width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }}
        m={object("m", [1, 2, 3, 4])}
        p={object("p", [1, 2, 3, 4])}
      >
        base box
      </Box>
    </div>
  ))
  .add("with props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        bg={text("bg", "tomato")}
        width={object("width", [
          1, // 100% below the smallest breakpoint (all viewports)
          1 / 2, // 50% from the next breakpoint and up
          1 / 4, // 25% from the next breakpoint and up
        ])}
      >
        Box with props
      </Box>
    </div>
  ))
