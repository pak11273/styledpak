import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../shared/theme"

// const ThemeDecorator = storyFn => (
//   <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
// )
const ThemeDecorator = StoryFn => (
  <ThemeProvider theme={theme}>
    <StoryFn />
  </ThemeProvider>
)

export default ThemeDecorator
