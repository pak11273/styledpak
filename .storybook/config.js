import { addDecorator, configure } from "@storybook/react"
import { setDefaults, withInfo } from "@storybook/addon-info"

import { GlobalStyle } from "./globalStyle"
import React from "react"
import { Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { createBrowserHistory } from "history"
import { jsxDecorator } from "storybook-addon-jsx"
import { theme } from "../shared/theme"
import { withKnobs } from "@storybook/addon-knobs"

const history = createBrowserHistory()

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router history={history}>{storyFn()}</Router>
  </ThemeProvider>
))

addDecorator(jsxDecorator) // this must come before loadStories!!

addDecorator(withInfo)
addDecorator(withKnobs)
setDefaults({
  inline: true,
  source: false,
})

const req = require.context("../src", true, /.stories.tsx$/)

function loadStories() {
  require("./Styleguide/Styleguide.stories")
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)
