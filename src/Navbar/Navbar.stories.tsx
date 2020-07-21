import "./navbar.css"

import { ButtonIcon, Hamburger, Link } from "../index"

import Navbar from "./Navbar"
// Generated with util/create-component.js
import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

export default {
  title: "Navbar",
}

storiesOf("Navbar", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Navbar />
    </div>
  ))
  .add("with props", props => {
    {
      console.log("props: ", props)
    }
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Navbar height={60}>
          <ButtonIcon
            activeClassName=".active"
            to="#"
            bg="pak.bg.default"
            activeColor="blue"
            hoverColor="red"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentcolor"
            >
              <circle
                r={11}
                cx={12}
                cy={12}
                fill="none"
                stroke="currentcolor"
                strokeWidth={2}
              />
            </svg>
          </ButtonIcon>
          <Link to="#" {...{ bg: "green", display: { _: "none", sm: "flex" } }}>
            item 2
          </Link>
          <Link to="#" {...{ bg: "blue", display: { _: "none", sm: "flex" } }}>
            item 3
          </Link>
          <Hamburger display={{ _: "flex", sm: "none" }} />
        </Navbar>
      </div>
    )
  })
