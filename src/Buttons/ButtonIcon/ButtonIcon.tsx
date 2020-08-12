import {
  LinkProps,
  NavLinkProps,
  NavLink as RouterLink,
} from "react-router-dom"
import React, { ReactElement, useEffect, useRef } from "react"

import { ButtonIconProps } from "./ButtonIcon.types"
import { SystemProps } from "../../../shared/types"
import styled from "styled-components"

type AnchorProps = any &
  SystemProps &
  ButtonIconProps &
  Pick<NavLinkProps, "to"> & {
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  }

// const Style = styled.button<ButtonIconProps>`
const Style = styled(RouterLink)<AnchorProps>`
  background: ${props => props.bg || "gray"};
  border: ${props =>
    props.color
      ? `1px solid ${props.color}`
      : props.border
      ? props.border
      : "none"};
  border-radius: ${props => props.radius || "3px"};
  color: ${props => props.color};
  cursor: ${props => props.cursor || "pointer"};
  &:hover {
    border-color: transparent;
    background: ${props => props.hoverColor || "none"};
  }
  // focus must come before :active so that the active box shadow overrides
  &:focus {
    border-color: transparent;
    background: ${props => props.focusColor || "none"};
  }
  &.${props => props.activeClassName} {
    background: ${props => props.activeColor || "none"};
  }
  &:disabled {
    background: ${props => props.disabledColor || "none"};
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

const ButtonIcon: React.FC<ButtonIconProps> = props => {
  console.log("props: ", props)
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

export default ButtonIcon
