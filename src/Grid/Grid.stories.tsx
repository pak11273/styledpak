import { Box, Navbar } from "../index"

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
    <Navbar gridArea="navbar" display={["none", "flex"]}>
      A navbar
    </Navbar>
    <Navbar gridArea="navbar" display={["flex", "none"]}>
      A foobar
    </Navbar>
    <Box gridArea="footer" bg="tomato">
      A footer
    </Box>
    <Box gridArea="sidebar">A sidebar</Box>
    <Box gridArea="main">A main</Box>
  </Grid>
)

//   <Child
//     style={{
//       width: "100%",
//       background: "green",
//       color: "white",
//       padding: "5rem",
//     }}
//     gridArea="sidebar"
//   >
//     sidebar
//   </Child>
//     navbar
//   </Child>
//   <Child
//     style={{
//       width: "100%",
//       background: "papayawhip",
//       color: "black",
//       padding: "5rem",
//       gridArea: "body",
//     }}
//     gridArea="body"
//   >
//     body
//   </Child>
//   <Child
//     style={{
//       width: "100%",
//       background: "blue",
//       color: "white",
//       padding: "5rem",
//     }}
//     gridArea="footer"
//   >
//     footer
//   </Child>
