import React, { ReactElement, useRef } from "react"

import { ButtonProps } from "./Button.types"
import styled from "styled-components"

const Style = styled.button<ButtonProps>`
  background: ${props => props.bg || "white"};
  border: ${props =>
    props.color
      ? `1px solid ${props.color}`
      : props.border
      ? props.border
      : "none"};
  border-radius: ${props => props.radius || "3px"};
  color: ${props => props.color};
  cursor: ${props => props.cursor || "pointer"};
  &:focus {
    background: ${props => props.focus || "none"};
  }
  margin: ${props => props.margin || "0"};
  outline: none;
  padding: ${props => props.padding || "6px 16px"};
  text-transform: ${props => props.case || "uppercase"};
  box-shadow: ${props =>
    props.shadow
      ? "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
      : "none"};
`

const Button: React.FC<ButtonProps> = props => {
  // const btn = useRef(null)
  const onClick = () => {
    // btn.current.blur()
    console.log("button")
  }
  // return <Style {...props} onClick={onClick} ref={btn} />
  return <Style {...props} onClick={onClick} />
}

export default Button
