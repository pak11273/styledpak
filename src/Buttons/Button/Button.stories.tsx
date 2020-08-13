import { boolean, color, object, select, text } from "@storybook/addon-knobs"

import Button from "./Button"
import React from "react"
import { storiesOf } from "@storybook/react"

const onClick = () => console.log("this is a button")

storiesOf("Button", module)
  .add("no props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button variant="primary" to="#">
        No Props
      </Button>
    </div>
  ))
  .add("sizes", () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
        <Button size="xlarge">xlarge</Button>
        <Button size="xxlarge">xxlarge</Button>
      </div>
    )
  })
  .add("playground", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        bg={text("bg", null)}
        margin={text("margin", "0px")}
        shadow={boolean("shadow", true)}
        disabled={boolean("disabled", false)}
        variant={text("variant", "primary")}
      >
        Custom
      </Button>
    </div>
  ))
