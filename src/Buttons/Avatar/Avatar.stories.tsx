import Avatar from "./Avatar"
import React from "react"
import { storiesOf } from "@storybook/react"

export default {
  title: "Avatar",
}

storiesOf("Avatar", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Avatar variant="secondary" size="xxlarge">
        base box
      </Avatar>
    </div>
  ))
  .add("with props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Avatar>Avatar with props</Avatar>
    </div>
  ))
