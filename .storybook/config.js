import { addDecorator } from "@storybook/react"
import themeDecorator from "./themeDecorator"
import { withInfo } from "@storybook/addon-info"

addDecorator(themeDecorator)
addDecorator(withInfo)
