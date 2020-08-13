import {
  borderRadius,
  buttonStyle,
  color,
  compose,
  fontSize,
  space,
  variant,
} from "styled-system"

import { BsPersonFill } from "react-icons/bs"
import React from "react"
import { css } from "@styled-system/css"
import styled from "styled-components"

const avatarSize = variant({
  prop: "size",
  key: "avatarSizes",
})

const Style = styled<any>("button")(
  {
    boxSizing: "border-box",
    borderRadius: "50%",
    border: 0,
    outline: "none",
    cursor: "pointer",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  },
  compose(borderRadius, avatarSize, buttonStyle, color, fontSize, space),
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

const Avatar: React.FC<any> = props => {
  return (
    <Style {...props}>
      <BsPersonFill style={{ fill: "white", height: "18px", width: "18px" }} />
    </Style>
  )
}

export default Avatar
