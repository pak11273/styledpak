import ButtonIcon from "./ButtonIcon"
import React from "react"
import { storiesOf } from "@storybook/react"

export default {
  title: "ButtonIcon",
}

storiesOf("ButtonIcon", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ButtonIcon>
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
            stroke="white"
            strokeWidth={2}
          />
        </svg>
      </ButtonIcon>
    </div>
  ))
  .add("with props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ButtonIcon>
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
            stroke="white"
            strokeWidth={2}
          />
        </svg>
      </ButtonIcon>
    </div>
  ))
