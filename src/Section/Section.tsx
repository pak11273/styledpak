import { flexbox, grid } from "styled-system"

import React from "react"
import { SystemProps } from "../../shared/types"
import styled from "styled-components"

const Section = styled.div<SystemProps>`
  display: flex;
  width: 100%;
  ${flexbox}
  ${grid}
`

export default Section
