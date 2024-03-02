import { PaletteOptions } from "@mui/material"

type Colors =
  | {
      [key: string]: Record<string, string> | string
    }
  | PaletteOptions

export const colorVariants: Colors = {
  primary: {
    light: "purple",
    main: "#ff5555",
    dark: "purple",
    contrastText: "#fff",
  },
  sidebar: {
    light: "#610C9F",
    dark: "#551655",
  },
  "background.2": "070F2B",
  //   background: {
  //     default: "#f8f3ff",
  //   },
}
