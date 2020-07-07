import React from "react"
import Text from "./Text"
import css from "@styled-system/css"
import { storiesOf } from "@storybook/react"

export default {
  title: "Text",
}

storiesOf("Text", module)
  .add("base", () => <Text>base text</Text>)
  .add("with props", () => (
    <Text
      {...{
        mt: 5,
        border: "10px solid red",
        bg: "link",
        p: { _: 20, sm: 40, md: 60 },
      }}
    >
      This is text
    </Text>
  ))
