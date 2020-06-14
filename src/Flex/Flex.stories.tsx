import Flex from "./Flex"
// Generated with util/create-component.js
import React from "react"

export default {
  title: "Flex",
}

export const Base = () => (
  <div style={{ height: "600px" }}>
    <Flex>
      <div style={{ background: "red" }}>item 1</div>
      <div style={{ background: "white" }}>item 2</div>
      <div style={{ background: "blue" }}>item 3</div>
    </Flex>
  </div>
)
