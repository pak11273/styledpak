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
  .add("with props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        fontSize={[100, 1, 1, 100]}
        p={text("p", "XXL")}
        m={30}
        bg={text("bg", "tomato")}
        color={text("color", "orange")}
      >
        Box with props
      </Box>
    </div>
  ))
