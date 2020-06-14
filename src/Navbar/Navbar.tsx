import Flex from "../Flex/Flex"
import { NavbarProps } from "./Navbar.types"
import React from "react"
import styled from "styled-components"

const Container = styled.div<NavbarProps>`
  display: flex;
  background: ${props => props.background || "transparent"};
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.35);
  height: ${props => props.height || "60px"};
  width: ${props => props.width || "100%"};
`

const Navbar = () => (
  <Container>
    <Flex justifyContent="flex-start">Flex</Flex>
  </Container>
)

export default Navbar
