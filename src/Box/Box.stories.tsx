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
      // lineHeight="copy"
      // m={number("m", 0)}
      // p={3}
      // bg="link"
      // color={text("color", "orange")}
      // space={12}
      // width={200}
      >
        Box with props
      </Box>
    </div>
  ))
