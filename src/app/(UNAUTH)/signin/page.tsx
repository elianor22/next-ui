import { UserButton } from "@clerk/nextjs"
import { Container } from "@mui/material"

export default function Signin() {
  return (
    <Container>
      <UserButton afterSignOutUrl="/" />
    </Container>
  )
}
