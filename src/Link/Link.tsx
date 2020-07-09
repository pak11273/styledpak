import { LinkProps, Link as RouterLink } from "react-router-dom"
import { color, layout, space, typography } from "styled-system"

import { Div } from "../index"
import React from "react"
import { SystemProps } from "../../shared/types"
import styled from "styled-components"

type AnchorProps = any &
  SystemProps &
  Pick<LinkProps, "to"> & {
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  }

const Style = styled(RouterLink)<any>`
  text-decoration: none;
  background: blue;
  padding: 0rem;
  ${color}
  ${typography}
  ${layout}
  ${space}
`

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

// export const Link: React.FC<AnchorProps> = ({
//   to,
//   onClick,
//   children,
//   ...props
// }) => {
//   return (
//     <RouterLink to={to} onClick={onClick}>
//       <Div>{children}</Div>
//     </RouterLink>
//   )
// }
