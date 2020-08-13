import React from "react";
import Dropdown from "./Dropdown";
import { storiesOf } from "@storybook/react"

export default {
    title: "Dropdown"
};

storiesOf("Dropdown", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Dropdown>base box</Dropdown>
    </div>
    ))
  .add("with props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Dropdown>Dropdown with props</Dropdown>
    </div>
    ))
