import { color, grid, layout, space, typography } from "styled-system"

import { Flex } from "../index"
import React from "react"
import { SystemProps } from "../../shared/types"
import styled from "styled-components"

const Style = styled(Flex)<SystemProps>`
  ${grid}
  ${color}
  ${typography}
  ${layout}
  ${space}
`

const Navbar = (props: any) => <Style {...props}>{props.children}</Style>

export default Navbar
