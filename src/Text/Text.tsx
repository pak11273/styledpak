import { color, compose, layout, space, typography } from "styled-system"

import styled from "styled-components"

const Text = styled<any>("p")({}, compose(color, layout, space, typography))

export default Text
