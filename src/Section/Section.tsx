import { color, flexbox, grid, layout, space } from "styled-system"

import { SystemProps } from "../../shared/types"
import styled from "styled-components"

const Section = styled.div<SystemProps>`
  display: flex;
  width: 100%;
  ${color}
  ${flexbox}
  ${grid}
  ${layout}
  ${space}
`

export default Section
