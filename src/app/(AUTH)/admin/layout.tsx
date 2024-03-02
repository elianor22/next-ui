

import Sidebar from "@/components/layouts/Sidebar/Sidebar"
import { UserButton } from "@clerk/nextjs"
import { Box } from "@mui/material"
import { ReactNode } from "react"

export default function AdminLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar />
      <UserButton />
      {children}
    </Box>
  )
}
