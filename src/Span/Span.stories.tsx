import React from "react"
import Span from "./Span"
import { number } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react"

export default {
  title: "Span",
}

storiesOf("Span", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Span>Base Span</Span>
    </div>
  ))
  .add("with props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Span fontSize={number("number", 80)}>Base Span</Span>
    </div>
  ))
