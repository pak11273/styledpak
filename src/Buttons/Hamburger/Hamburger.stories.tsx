import { Hamburger } from "./Hamburger"
import React from "react"

export default {
  title: "Hamburger",
}

export const Base = () => {
  const someParentFunc = () => {
    return "blah"
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Hamburger bg="blue" size="small" variant="secondary" />
    </div>
  )
}
