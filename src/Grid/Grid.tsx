import { GridProps } from "./Grid.types"
import { Props } from "../../shared/interfaces"
import React from "react"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;

  background: ${(props: Props) => props.background || "transparent"};
  grid-template-areas: ${props =>
    props.gridTemplateAreas
      ? props.gridTemplateAreas.reduce(
          (acc, v) => (acc += `${"'" + v + "'" + "\n"}`),
          ``
        ) + ";"
      : "none"};
  grid-template-columns: ${props => props.gridTemplateColumns || "auto"};
  grid-template-rows: ${props => props.gridTemplateRows || "auto"};
  width: ${props => props.width || "100%"};
  max-width: ${props => props.maxWidth || "none"};
`

// const Grid: React.FC<GridProps> = props => {
//   console.log(props)
//   return <Foo {...props}>{props.children}</Foo>

export default Grid
