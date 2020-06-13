import { FlexProps } from "./Flex.types"
// Generated with util/create-component.js
import React from "react"
import styled from "styled-components"

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyContent || "center"};
`

export default Flex
