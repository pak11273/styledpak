import Box from "./Box"
import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { withKnobs } from "@storybook/addon-knobs"

export default {
  title: "Box",
}

export const Base = () => (
  <Box p={3} bg="whites.10" color="orange">
    This is a box
  </Box>
)

storiesOf("Box", module).addDecorator(withKnobs)
