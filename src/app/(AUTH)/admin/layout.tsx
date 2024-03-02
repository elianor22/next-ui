

import AdminNavbar from "@/components/layouts/Navbar/AminNavbar"
import Sidebar from "@/components/layouts/Sidebar/Sidebar"
import { UserButton } from "@clerk/nextjs"
import { Box } from "@mui/material"
import { ReactNode } from "react"

export default function AdminLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Box display="flex" minHeight="100vh">
      <AdminNavbar/>
      <Sidebar />
      <UserButton />
      {children}
    </Box>
  )
}
