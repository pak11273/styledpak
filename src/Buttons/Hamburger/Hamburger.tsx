import { Button } from "../../index"
import React from "react"
import styled from "styled-components/"
import { variant } from "styled-system"

const Styles = styled<any>(Button)(
  {},
  variant({
    scale: "buttons",
    variants: {
      primary: {},
    },
  })
)

export const Hamburger = (props: any) => {
  return (
    <Styles {...props}>
      <svg viewBox="0 0 100 80" width="24" height="24" fill="#fff">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
    </Styles>
  )
}
