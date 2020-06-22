import { boolean, color, object, select, text } from "@storybook/addon-knobs"

import Button from "./Button"
import React from "react"
import { storiesOf } from "@storybook/react"

storiesOf("Button", module)
  .add("no props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button>No Props</Button>
    </div>
  ))
  .add("with theme primary bg", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button bg="red" color="primary">
        Primary
      </Button>
    </div>
  ))
  .add("playground", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        border={text("border", "1px solid black")}
        color={color("color", "none", "color")}
        focus={text("focus", "red")}
        padding={text("padding", "6px 16px")}
        margin={text("margin", "0px")}
        shadow={boolean("shadow", true)}
        case={text("case", "none")}
      >
        <div>Primary</div>
      </Button>
    </div>
  ))
