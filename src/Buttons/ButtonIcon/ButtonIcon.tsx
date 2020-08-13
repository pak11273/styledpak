import { Button } from "../../"
import React from "react"
import styled from "styled-components"

const Style = styled<any>(Button)({})

const ButtonIcon: React.FC<any> = props => {
  return <Style {...props} />
}

export default ButtonIcon
