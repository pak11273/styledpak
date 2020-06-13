import { InputProps } from "./Input.types"
// Generated with util/create-component.js
import React from "react"

const Input: React.FC<InputProps> = ({ label, ...inputProps }) => (
  <div>
    <div>{label}</div>
    <div>
      <input {...inputProps} />
    </div>
  </div>
)

export default Input
