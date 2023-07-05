'use client'
import GlobalStyle from "@/assets/globalStyle"
import SideBar from "@/components/SideBar";
import { usePathname } from "next/navigation";

const metadata = {
  title: 'Sikayetvar User Page',
  description: 'This project was created for Sikayetvar Case Project',
}

export default function RootLayout({ children }) {
  const pathName = usePathname()

  return (
    <html lang="en">
      <GlobalStyle/>
      <body >
        {pathName !== '/' && <SideBar/>  }
        {children}
        </body>
    </html>
  )
}
