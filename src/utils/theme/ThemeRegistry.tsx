import { ThemeProvider } from "@emotion/react"
import { Theme } from "@mui/material"
import { FC, ReactNode } from "react"
import { theme } from "./theme"

const ThemeRegistry: FC<{ children: ReactNode }> = ({ children }) => {
  const customTheme: Theme = theme
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
}

export default ThemeRegistry
