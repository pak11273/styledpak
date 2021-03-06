import React, { ReactElement, useEffect, useRef } from "react"
import {
  borderRadius,
  buttonStyle,
  color,
  compose,
  fontSize,
  space,
  variant,
} from "styled-system"

import { css } from "@styled-system/css"
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
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  },
  compose(borderRadius, buttonSize, buttonStyle, color, fontSize, space),
  variant({
    scale: "buttons",
    variants: {
      primary: {},
    },
  }),
  css({
    "&:hover": {
      background: "secondary",
    },
  })
)

Style.defaultProps = {
  variant: "primary",
  size: "medium",
  margin: 4,
}

const Button: React.FC<any> = props => {
  return <Style {...props} />
}

export default Button
