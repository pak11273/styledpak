import { color, fontSize, space, width } from "styled-system"

import { BoxProps } from "./Box.types"
import React from "react"
import styled from "styled-components"

const Style = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

const Box: React.FC<BoxProps> = props => (
  <Style {...props}>{props.children}</Style>
)

export default Box
