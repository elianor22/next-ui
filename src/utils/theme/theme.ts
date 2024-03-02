import { Theme, createTheme } from "@mui/material"
import { colorVariants } from "./colors"

export const theme: Theme = createTheme({
  palette: {
    mode: "light",
    ...colorVariants,
  },
})
