import {
  boolean,
  color,
  number,
  object,
  select,
  text,
} from "@storybook/addon-knobs"

import React from "react"
import Text from "./Text"
import css from "@styled-system/css"
import { storiesOf } from "@storybook/react"

export default {
  title: "Text",
}

storiesOf("Text", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Text>base text</Text>
    </div>
  ))
  .add("responsive props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Text
        bg={text("bg", "tomato")}
        m={object("m", [0, 1, 2])}
        p={object("p", [2, 3, 4])}
        fontSize={object("fontSize", [3, 4, 5])}
      >
        base text
      </Text>
    </div>
  ))
  .add("with props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Text
        fontSize={object("fontSize", [100, 1, 1, 100])}
        p={text("p", "XXL")}
        m={30}
        bg={text("bg", "tomato")}
        color={text("color", "orange")}
        width={object("width", [
          1, // 100% below the smallest breakpoint (all viewports)
          1 / 2, // 50% from the next breakpoint and up
          1 / 4, // 25% from the next breakpoint and up
        ])}
      >
        This is text
      </Text>
    </div>
  ))

// mt={object("mt", { _: 10, sm: 20, md: 30 })}
// border={text("border", "10px solid red")}
// bg={text("bg", "link")}
// p={object("p", { _: 20, sm: 40, md: 60 })}
