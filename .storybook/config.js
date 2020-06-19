import { addDecorator, configure } from "@storybook/react"

import themeDecorator from "./themeDecorator"
import { withInfo } from "@storybook/addon-info"

const req = require.context("../src", true, /.stories.js$/)

function loadStories() {
  require("./Styleguide/Styleguide.stories")
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)

addDecorator(themeDecorator)
addDecorator(withInfo)
