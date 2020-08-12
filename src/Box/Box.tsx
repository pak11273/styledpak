import { color, grid, layout, space } from "styled-system"

import { SystemProps } from "../../shared/types"
import styled from "styled-components"

const Box = styled.div<SystemProps>`
  ${color}
  ${grid}
  ${layout}
  ${space}
`

export default Box
