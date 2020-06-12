import "@testing-library/jest-dom"

import { cleanup, render } from "@testing-library/react"

import Grid from "./Grid"
import { GridProps } from "./Grid.types"
import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"

// Generated with util/create-component.js

describe("Test Component", () => {
  let props: GridProps

  // beforeEach(() => {
  //   props = {
  //     foo: "bar",
  //   }
  // })

  afterEach(cleanup)

  // const renderComponent = () => render(<Grid {...props} />)

  // it("matches snapshot", () => {
  // const tree = renderer.create(<Grid />).toJSON()
  // expect(tree).toMatchSnapshot()
  // })

  // Check props
  it("should have a black background if given a background props of black", () => {
    // const tree = renderer.create(<Grid />).toJSON()
  })

  // nest a component and the label of that component should
  it("renders a child component with the correct areas", () => {
    // const grid = renderer.create(
    // <Grid>
    //   <div style={{ gridArea: "navbar" }}>navbar</div>
    // </Grid>
    // )
  })

  // the grid should be responsive
})
