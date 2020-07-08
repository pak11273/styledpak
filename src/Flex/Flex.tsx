import { Div } from "../index"
import { SystemProps } from "../../shared/types"
import { flexbox } from "styled-system"
import styled from "styled-components"

/* const Flex = styled.div<SystemProps>` */
const Flex = styled(Div)`
  display: flex;
  /* ${flexbox} */
`

export default Flex
