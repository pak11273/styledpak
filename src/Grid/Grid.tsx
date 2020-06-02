import { GridProps } from "./Grid.types"
// Generated with util/create-component.js
import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  display: grid;
  background: ${props => props.bg || "transparent"};
  grid-template-areas: ${props =>
    props.areas
      ? props.areas.reduce((acc, v) => (acc += `${"'" + v + "'" + "\n"}`), ``) +
        ";"
      : "none"};
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100%;
  max-width: ${props => props.maxWidth || "none"};
`

const Grid: React.FC<GridProps> = ({ foo }) => <div>{foo}</div>

export default Grid
