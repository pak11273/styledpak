// import { Link as DomLink, LinkProps } from "react-router-dom"
// import { color, grid, layout, space } from "styled-system"

// import React from "react"
// import { SystemProps } from "../../shared/types"
// import styled from "styled-components"

// // const Link: React.FC<LinkProps> = () => <div>Link</div>

// type AnchorProps = SystemProps &
//   Pick<LinkProps, "to"> & {
//     onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
//   }

// const Style = styled(DomLink)<LinkProps & AnchorProps>`
//   background-color: blue;
//   text-decoration: none;

//   ${color}
//   ${grid}
//   ${layout}
//   ${space}
// `
// /* &.${props => props.activeClassName} {
//     background-color: paleturquoise;
//   } */

// export const Link: React.FC<AnchorProps> = ({
//   to,
//   onClick,
//   children,
//   ...props
// }) => (
//   <Style to={to} onClick={onClick}>
//     {children}
//   </Style>
// )

import { Link as RouterLink } from "react-router-dom"
import styled from "styled-components"

export const Link = styled(RouterLink)`
  background-color: blue;
`
