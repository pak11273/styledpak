import {
  color,
  compose,
  flexbox,
  grid,
  layout,
  space,
  variant,
} from "styled-system"

import styled from "styled-components"

const Box = styled<any>("div")(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  compose(color, grid, layout, space, flexbox)
)

export default Box
