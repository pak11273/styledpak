import { color, grid, layout, space } from "styled-system"

import { SystemProps } from "../../shared/types"
import styled from "styled-components"

const Form = styled.form<SystemProps>`
  box-sizing: border-box;
  min-width: 0;
  ${color}
  ${grid}
  ${layout}
  ${space}
`

export default Form
