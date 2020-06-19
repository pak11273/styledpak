import JSXAddon, { jsxDecorator } from "storybook-addon-jsx"
import { addDecorator, configure, setAddon } from "@storybook/react"

import themeDecorator from "./themeDecorator"
import { withInfo } from "@storybook/addon-info"
import { withKnobs } from "@storybook/addon-knobs"

// setAddon(JSXAddon)

const req = require.context("../src", true, /.stories.js$/)

addDecorator(jsxDecorator) //
function loadStories() {
  require("./Styleguide/Styleguide.stories")
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)

addDecorator(themeDecorator)
addDecorator(withInfo)
addDecorator(withKnobs)
