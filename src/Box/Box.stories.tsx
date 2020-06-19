import { color, withKnobs } from "@storybook/addon-knobs"

import Box from "./Box"
import React from "react"
import { storiesOf } from "@storybook/react"

export default {
  title: "Box",
}

export const Base = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Box fontSize={96} p={3} bg="light-red" color="orange">
      This is a box
    </Box>
  </div>
)

storiesOf("Box", module).addDecorator(withKnobs)
