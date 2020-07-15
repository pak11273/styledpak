import { Box, Flex, Link, Navbar } from "../index"

import Grid from "./Grid"
import { Props } from "../../shared/interfaces"
import React from "react"
import styled from "styled-components"

export default {
  title: "Grid",
}

export const WithBasicLayout = () => (
  <Grid
    gridTemplateAreas="'navbar navbar' 'sidebar main' 'footer footer'"
    gridTemplateColumns="1fr 2fr"
  >
    <Navbar {...{ gridArea: "navbar", display: { _: "none", sm: "flex" } }}>
      <Link to="#">link</Link>
      <Link to="#">link</Link>
      <Link to="#">link</Link>
    </Navbar>
    <Flex gridArea="footer" bg="tomato">
      A footer
    </Flex>
    <Flex gridArea="sidebar">A sidebar</Flex>
    <Flex gridArea="main">A main</Flex>
  </Grid>
)
