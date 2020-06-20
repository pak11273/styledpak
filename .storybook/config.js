import { addDecorator, configure } from "@storybook/react"
import { setDefaults, withInfo } from "@storybook/addon-info"

import React from "react"
import { ThemeProvider } from "styled-components"
import { jsxDecorator } from "storybook-addon-jsx"
import theme from "../shared/theme"
import { withKnobs } from "@storybook/addon-knobs"

const themeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

const req = require.context("../src", true, /.stories.js$/)

addDecorator(themeDecorator)
addDecorator(jsxDecorator) // this must come before loadStories!!

addDecorator(withInfo)
addDecorator(withKnobs)
setDefaults({
  inline: true,
  source: false,
})

function loadStories() {
  require("./Styleguide/Styleguide.stories")
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)
