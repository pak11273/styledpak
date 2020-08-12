import React, { ReactElement, useEffect, useRef } from "react"
import { color, layout, space } from "styled-system"

import { ButtonProps } from "./Button.types"
import { SystemProps } from "../../../shared/types"
import { darken } from "polished"
import styled from "styled-components"

const isEmpty = (props: any) =>
  props.variants ? Object.keys(props.variants).length > 0 : false

const Style = styled.button<any>`
  background: ${props =>
    props.bg
      ? props.bg
      : props.variant
      ? props.theme.colors.variants[props.variant]
      : "gray"};
  border: ${props => (props.border ? `1px solid ${props.color}` : "none")};
  border-radius: ${props => props.radius || "3px"};
  box-shadow: ${props =>
    props.shadow
      ? "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
      : "none"};
  box-sizing: border-box;
  color: ${props => props.color || "white"};
  cursor: ${props => props.cursor || "pointer"};
  &:hover {
    border-color: transparent;
    background: ${props =>
      props.hoverColor
        ? props.hoverColor
        : props.bg
        ? darken(0.2, props.bg)
        : props.variant === "primary"
        ? darken(0.2, props.theme.colors.variants.primary)
        : props.variant
        ? darken(0.2, props.theme.colors.variants[props.variant])
        : darken(0.2, "gray")}
          };
  // focus must come before :active so that the active box shadow overrides
  &:focus {
    border-color: transparent;
    background: ${props => props.focusColor || "none"};
  }
  &:active {
    background: ${props => props.activeColor || "none"};
  }
  /* &:disabled {
    background: ${props => props.disabledColor || "none"};
  } */
  margin: ${props => props.margin || "0"};
  min-width: 0;
  outline: none;
  padding: ${props => props.padding || "6px 16px"};
  text-transform: ${props => props.case || "uppercase"};
  ${color}
  ${layout}
  ${space}
`
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
  return <Style {...props} onClick={props.onClick} ref={btn} />
}

export default Button
