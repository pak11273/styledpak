import React, { ReactElement, useEffect, useRef } from "react"
import {
  borderRadius,
  buttonStyle,
  color,
  compose,
  fontSize,
  layout,
  space,
  variant,
} from "styled-system"

import { ButtonProps } from "./Button.types"
import { SystemProps } from "../../../shared/types"
import { css } from "@styled-system/css"
import { darken } from "polished"
import styled from "styled-components"

const buttonSize = variant({
  prop: "size",
  key: "buttonSizes",
})

const Style = styled<any>("button")(
  {
    appearance: "button",
    boxSizing: "border-box",
    border: 0,
    outline: "none",
    cursor: "pointer",
    textTransform: "uppercase",
  },
  borderRadius,
  buttonSize,
  buttonStyle,
  color,
  fontSize,
  space,
  variant({
    scale: "buttons",
    variants: {
      primary: {},
    },
  }),
  css({
    "&:hover": {
      color: "secondary",
    },
  })
)

Style.defaultProps = {
  variant: "primary",
  size: "medium",
  margin: 4,
  boxShadow:
    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
}

const Button: React.FC<any> = props => {
  const btn = useRef(null)
  // TODO: when not focused change bg back to default
  const handleFocusOut = (e: MouseEvent) => {
    console.log("btn: ", btn)
  }
  useEffect(() => {
    addEventListener("mouseleave", handleFocusOut)
    return removeEventListener("mouseleave", () => {})
  })
  return <Style {...props} ref={btn} />
}

export default Button
