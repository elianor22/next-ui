import { SignIn,  } from "@clerk/nextjs"
import { Container } from "@mui/material"

export default function Signin() {
  return (
    <Container>
      <SignIn afterSignInUrl="/admin" />
    </Container>
  )
}
