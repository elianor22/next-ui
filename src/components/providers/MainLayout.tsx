"use client"

import { FC, ReactNode } from "react"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import ThemeRegistry from "@/utils/theme/ThemeRegistry"
const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeRegistry>{children}</ThemeRegistry>
    </AppRouterCacheProvider>
  )
}

export default MainLayout
