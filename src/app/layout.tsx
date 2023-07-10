import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { NavbarMenuContextProvider, useNavbarMenuContext } from '@/context/NavbarMenuContext'
import Footer from '@/components/footer/Footer'

const bodyFont = Lato({
  weight:["100",'300','400','700','900'],
  subsets:['latin']
})


export const metadata: Metadata = {
  title: 'IEEE Event',
  description: 'Delve deep into a world of tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NavbarMenuContextProvider>
        <body className={`${bodyFont.className} min-h-screen flex flex-col justify-between bg-[#000021]`}>
          <Navbar/>
          {children}
          <Footer/>
          </body>
      </NavbarMenuContextProvider>
      </html>
  )
}
