import { NavLinkProps, NavLink as RouterLink } from "react-router-dom"
import { color, layout, space, typography, variant } from "styled-system"

import { Div } from "../index"
import { LinkComponentProps } from "./Link.types"
import React from "react"
import { SystemProps } from "../../shared/types"
import styled from "styled-components"

type AnchorProps = any &
  SystemProps &
  LinkComponentProps &
  Pick<NavLinkProps, "to"> & {
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  }

// background: ${props => props.bg || props.theme.colors.pak.bg.default};
const Style = styled(RouterLink)<AnchorProps>(
  {
    textDecoration: "none",
    padding: "0em",
  },
  color,
  typography,
  layout,
  space,
  variant({
    variants: {
      default: {
        color: "primary",
        bg: "transparent",
      },
      secondary: {
        color: "white",
        bg: "secondary",
      },
    },
  })
)

Style.defaultProps = {
  alignItems: "center",
  display: "flex",
  fontSize: "40px",
}

export const Link: React.FC<AnchorProps> = ({
  to,
  onClick,
  children,
  ...props
}) => {
  return (
    <Style to={to} onClick={onClick} {...props}>
      {children}
    </Style>
  )
}
