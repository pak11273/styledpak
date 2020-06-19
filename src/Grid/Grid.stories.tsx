import Grid from "./Grid"
import { Props } from "../../shared/interfaces"
import React from "react"
import styled from "styled-components"

// Generated with util/create-component.js



export default {
  title: "Grid",
}

const Child = styled.div<Props>`
  grid-area: ${props => props.gridArea || null};
`

export const WithBasicLayout = () => (
  <div>pending</div>
  // <Grid
  //   gridTemplateAreas={["navbar navbar", "sidebar body", "footer footer"]}
  //   gridTemplateColumns="1fr 2fr"
  // >
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
  //   <Child
  //     style={{
  //       width: "100%",
  //       background: "red",
  //       color: "white",
  //       padding: "5rem",
  //     }}
  //     gridArea="navbar"
  //   >
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
  // </Grid>
)
