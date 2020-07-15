export interface ButtonIconProps {
  /**
   * background color
   *
   * @default white
   */
  bg?: string
  /**
   * border shorthand, if you add a color prop then "${props.color}" will be the default 1px solid
   *
   * @default none
   */
  border?: string
  /**
   * @default: uppercase
   */
  case?: string
  color?: string
  /**
   * @default pointer
   */
  cursor?: string
  /**
   * @default false
   */
  disabled?: boolean
  /**
   * @default none
   */
  focusColor?: string
  /**
   * @default none
   */
  activeColor?: string
  /**
   * @default none
   */
  hoverColor?: string
  /**
   * @default none
   */
  disabledColor?: string
  /**
   * @default () => {alert("hi")}
   */
  onClick?: () => void
  /**
   * @default "6px 16px"
   */
  padding?: string
  /**
   * @default 0
   */
  margin?: string
  /**
   * "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
   *
   * @default none
   */
  shadow?: boolean
  theme?: object
  lowercase?: boolean
  info?: boolean
  open?: string
  /**
   * @default 3px
   */
  radius?: string
  style?: React.CSSProperties
  to?: string
}
