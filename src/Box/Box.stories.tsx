import { boolean, color, object, select, text } from "@storybook/addon-knobs"

import Box from "./Box"
import React from "react"
import { storiesOf } from "@storybook/react"

export default {
  title: "Box",
}

storiesOf("Box", module).add("base", () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Box fontSize={6} p={3} bg="primary" color={text("color", "orange")}>
      This is a box
    </Box>
  </div>
))
