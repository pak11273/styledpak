import Box from "../Box/Box"
import { CardProps } from "./Card.types"
import styled from "styled-components"

// const Card: React.FC<CardProps> = () => <div>Card</div>

const Card = styled(Box)({
  borderRadius: "4",
  border: "1px solid #f6f6f6",
  boxShadow: "0 2px 4px rgba(0, 0, 0, .125)",
})

export default Card
