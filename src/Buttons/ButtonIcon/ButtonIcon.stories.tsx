import ButtonIcon from "./ButtonIcon"
import React from "react"
import { storiesOf } from "@storybook/react"

export default {
  title: "ButtonIcon",
}

storiesOf("ButtonIcon", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ButtonIcon>base box</ButtonIcon>
    </div>
  ))
  .add("with props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ButtonIcon>ButtonIcon with props</ButtonIcon>
    </div>
  ))
