import { boolean, color, object, select, text } from "@storybook/addon-knobs"

import Button from "./Button"
import React from "react"
import { storiesOf } from "@storybook/react"

const onClick = () => console.log("this is a button")

storiesOf("Button", module)
  .add("no props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button to="#">No Props</Button>
    </div>
  ))
  .add("with icon", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        to="#"
        focusColor={text("focusColor", "red")}
        padding={text("padding", "6px 16px")}
        margin={text("margin", "0px")}
        shadow={boolean("shadow", true)}
        onClick={onClick}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentcolor"
          >
            <circle
              r={11}
              cx={12}
              cy={12}
              fill="none"
              stroke="currentcolor"
              strokeWidth={2}
            />
          </svg>
        </div>
      </Button>
    </div>
  ))
  .add("playground", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        bg={text("bg", null)}
        padding={text("padding", "6px 16px")}
        margin={text("margin", "0px")}
        shadow={boolean("shadow", true)}
        // disabled={boolean("disabled", false)}
        variant={text("variant", null)}
        onClick={onClick}
      >
        <div>Custom</div>
      </Button>
    </div>
  ))
