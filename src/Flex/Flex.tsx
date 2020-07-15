import { color, flexbox, grid, layout, space } from "styled-system"

import { Div } from "../index"
import React from "react"
import { SystemProps } from "../../shared/types"
import styled from "styled-components"

const Style = styled(Div)<SystemProps>(
  { display: "flex", width: "100%" },
  grid,
  flexbox,
  color,
  layout,
  space
)

export const Flex: React.FC<any | SystemProps> = ({ children, ...props }) => (
  <Style {...props}>{children}</Style>
)

export default Flex
