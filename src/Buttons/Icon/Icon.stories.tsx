import React from "react";
import Icon from "./Icon";
import { storiesOf } from "@storybook/react"

export default {
    title: "Icon"
};

storiesOf("Icon", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Icon>base box</Icon>
    </div>
    ))
  .add("with props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Icon>Icon with props</Icon>
    </div>
    ))
