import { Box, Button, Input, Label } from "../index"

import Form from "./Form"
import React from "react"
import { storiesOf } from "@storybook/react"

export default {
  title: "Form",
}

storiesOf("Form", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form>base box</Form>
    </div>
  ))
  .add("with props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form>
        <h1>
          TODO: Remove this component, we are opting for (Box as="form")  
          instead.
        </h1>
        <Box>
          <Label htmlFor="password">password</Label>
          <Input name="password" />
        </Box>
        <Box>
          <Label>email</Label>
          <Input />
        </Box>
        <Button>Submit</Button>
      </Form>
    </div>
  ))
