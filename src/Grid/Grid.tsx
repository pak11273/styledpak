import { Box } from "../index"
import { SystemProps } from "../../shared/types"
import { grid } from "styled-system"
import styled from "styled-components"

const Grid = styled.div<SystemProps>`
  display: grid;
  ${grid}
`
// grid-template-areas: ${props =>
//   props.gridTemplateAreas
//     ? props.gridTemplateAreas.reduce(
//         (acc, v) => (acc += `${"'" + v + "'" + "\n"}`),
//         ``
//       ) + ";"
//     : "none"};

// const Grid: React.FC<GridProps> = props => {
//   console.log(props)
//   return <Foo {...props}>{props.children}</Foo>

export default Grid
