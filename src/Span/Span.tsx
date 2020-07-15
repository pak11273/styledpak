import {
  FontSizeProps,
  border,
  borderRadius,
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  layout,
  letterSpacing,
  lineHeight,
  padding,
  size,
  space,
  textAlign,
  textStyle,
} from "styled-system"

import styled from "styled-components"

type SpanProps = FontSizeProps

export default styled.span<SpanProps>`
  ${border}
  ${space}
  ${fontSize}
  ${fontStyle}
  ${size}
  ${color}
  ${layout}
  ${textStyle}
  ${letterSpacing}
  ${fontFamily}
  ${fontWeight}
  ${borderRadius}
  ${lineHeight}
  ${padding}
  ${textAlign}
`
