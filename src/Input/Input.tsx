// import { InputProps } from "./Input.types"
// // Generated with util/create-component.js
// import React from "react"

// const Input: React.FC<InputProps> = ({ label, ...inputProps }) => (
//   <div>
//     <div>{label}</div>
//     <div>
//       <input {...inputProps} />
//     </div>
//   </div>
// )

import { color, space } from "styled-system"

import { SystemProps } from "../../shared/types"
import styled from "styled-components"

const Input = styled.input<SystemProps>`
  width: 100%;
  ${color}
  ${space}
`

export default Input
