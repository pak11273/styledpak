import { color, compose, flexbox, grid, layout, space } from "styled-system"

import React from "react"
import { css } from "@styled-system/css"
import styled from "styled-components"

const Style = styled<any>("div")(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  compose(color, grid, layout, space, flexbox),
  css({
    a: {
      textDecoration: "none",
    },
    nav: {
      fontFamily: "monospace",
    },
    ul: {
      background: "darkorange",
      listStyle: "none",
      margin: 0,
      paddingLeft: 0,
    },
    li: {
      color: "#fff",
      background: "darkorange",
      display: "block",
      float: "left",
      padding: "1rem",
      position: "relative",
      textDecoration: "none",
      transitionDuration: "0.5s",
    },
    "li a": {
      color: "#fff",
    },
    "li:hover, li:focus-within": {
      background: "red",
      cursor: "pointer",
    },
    "li:focus-within a": {
      outline: "none",
    },
    "ul li ul": {
      background: "orange",
      visibility: "hidden",
      opacity: 0,
      minWidth: "5rem",
      position: "absolute",
      transition: "all 0.5s ease",
      marginTop: "1rem",
      left: 0,
      display: "none",
    },
    "ul li:hover > ul, ul li:focus-within > ul, ul li ul:hover, ul li ul:focus": {
      visibility: "visible",
      opacity: 1,
      display: "block",
    },
    "ul li ul li": {
      clear: "both",
      width: "100%",
    },
  })
)

const Dropdown: React.FC<any> = () => (
  <Style>
    <nav role="navigation">
      <ul>
        <li>
          <a href="#">One</a>
        </li>
        <li>
          <a href="#" aria-haspopup="true">
            Two
          </a>
          <ul aria-label="submenu">
            <li>
              <a href="#">Sub-1</a>
            </li>
            <li>
              <a href="#">Sub-2</a>
            </li>
            <li>
              <a href="#">Sub-3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Three</a>
        </li>
      </ul>
    </nav>
  </Style>
)

export default Dropdown
