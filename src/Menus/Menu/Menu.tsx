import { MenuProps } from "./Menu.types"
import { Props } from "../../../shared/interfaces"
// Generated with util/create-component.js
import React from "react"
import styled from "styled-components"

const Style = styled.div<MenuProps>`
  display: flex;
`

const Menu: React.FC<MenuProps> = props => (
  <Style {...props}>
    {props.links.map(link => (
      <a href="/link">{link}</a>
    ))}
  </Style>
)

export default Menu
