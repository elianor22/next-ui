import { FC, ReactNode } from "react"
import { Button as MuiButton } from "@mui/material"

export interface IButton {
  children: ReactNode | string
}
const Button: FC<IButton> = ({ children }) => {
  return (
    <MuiButton data-testid="button" variant="contained">
      {children}
    </MuiButton>
  )
}

export default Button
