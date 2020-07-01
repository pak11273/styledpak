import { color, fontSize, layout, space, width } from "styled-system"

import { BoxProps } from "./Box.types"
import React from "react"
import styled from "styled-components"

const Box = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  /* ${color}
  ${fontSize}
  ${space}
  ${width} */
`
export default Box
