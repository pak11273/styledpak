import { color, compose, grid, layout, space, variant } from "styled-system"

import styled from "styled-components"

const Box = styled<any>("div")(
  {
    boxSizing: "border-box",
  },

  compose(color, grid, layout, space)
)

export default Box
