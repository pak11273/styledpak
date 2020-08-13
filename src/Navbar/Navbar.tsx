import { color, grid, layout, space, typography, variant } from "styled-system"

import { Flex } from "../index"
import React from "react"
import { SystemProps } from "../../shared/types"
import styled from "styled-components"

const Style = styled<any>(Flex)(
  {
    textDecoration: "none",
    padding: "0em",
  },
  grid,
  color,
  typography,
  layout,
  space
)

Style.defaultProps = {
  alignItems: "center",
  display: "flex",
  height: "60px",
  justifyContent: "space-around",
  width: "100%",
}

const Navbar = (props: any) => <Style {...props}>{props.children}</Style>

export default Navbar
