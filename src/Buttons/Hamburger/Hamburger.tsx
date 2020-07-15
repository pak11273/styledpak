import React, { useState } from "react"
import { color, layout } from "styled-system"

import { Button } from "../../index"
import { HamburgerProps } from "./Hamburger.types"
import { SystemProps } from "../../../shared/types"
import styled from "styled-components/"

const Styles = styled(Button)<SystemProps>`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  ${color};
  ${layout};
`

export const Hamburger = (props: any) => {
  const [open, setOpen] = useState(false)
  return (
    <Styles {...props} onClick={() => alert("hi")}>
      <div />
      <div />
      <div />
    </Styles>
  )
}
