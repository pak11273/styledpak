import {
  boolean,
  object,
  select,
  text,
  withKnobs,
} from "@storybook/addon-knobs"

import Button from "./Button"
import React from "react"
import { storiesOf } from "@storybook/react"
import theme from "../../../shared/theme"

storiesOf("Button", module)
  .addDecorator(withKnobs)

  .add("no props", props => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button>No Props</Button>
    </div>
  ))
  .add("with theme primary color", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button background={theme.colors.primary} color={theme.colors.white}>
        Primary
      </Button>
    </div>
  ))
  .add("playground", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        border={text("border", "1px solid black")}
        color={text("color", "none")}
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
