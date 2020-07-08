import { Box, Flex } from "../index"

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
      <Flex>
        <Box {...{ bg: "red" }}>Logo Button</Box>
        <Box {...{ bg: "red" }}>item 1</Box>
        <Box {...{ bg: "green" }}>item 2</Box>
        <Box {...{ bg: "blue" }}>item 3</Box>
      </Flex>
    </div>
  ))
