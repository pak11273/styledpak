import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from "styled-system"

type Props = LayoutProps & ColorProps & SpaceProps & TypographyProps
export interface BoxProps {
  /**
   * @default white
   */
  bg?: string
  // color?: string
  fontSize?: number
  // lineHeight?: string
  // p?: number
  // m?: number
  // space?: number
  // width?: number
}
