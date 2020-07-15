import React from "react"
import Section from "./Section"
import { storiesOf } from "@storybook/react"

export default {
  title: "Section",
}

storiesOf("Section", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Section gridArea="fifo">base section</Section>
    </div>
  ))
  .add("with props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Section gridArea="lifo">Section with props</Section>
    </div>
  ))
