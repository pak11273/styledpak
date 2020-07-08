import { Box } from "../index"
import Flex from "./Flex"
import React from "react"
import { storiesOf } from "@storybook/react"

export default {
  title: "Flex",
}

storiesOf("Flex", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Flex> Base FlexBox</Flex>
    </div>
  ))
  .add("with props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Flex>
        <Box {...{ bg: "red" }}>item 1</Box>
        <Box {...{ bg: "green" }}>item 2</Box>
        <Box {...{ bg: "blue" }}>item 3</Box>
      </Flex>
    </div>
  ))
