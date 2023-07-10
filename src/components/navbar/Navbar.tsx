"use client"
import React, { useEffect, useState } from 'react'
import Mobile from './Mobile'
import Desktop from './Desktop'
import { League_Spartan } from 'next/font/google'
import { useNavbarMenuContext } from '@/context/NavbarMenuContext'
import Sidebar from './Sidebar'

const titleFont = League_Spartan({ subsets: ['latin']})


const Navbar = () => {
  //@ts-ignore
  const {isSidebarOpen,setIsSidebarOpen} = useNavbarMenuContext()
  const [isScreenMd,setIsScreenMd] = useState<boolean | null>(null)
  //  @ts-ignore
  useEffect(()=>{
    setIsScreenMd(window.innerWidth<=768)
  },[])
  return (
    <header className={`min-h-[10vh] py-4 px-5 ${titleFont.className} font-light text-lg z-10 bg-transparent`}>
        {isScreenMd!==null && isScreenMd ? <Mobile/>:<Desktop/>}
        {isSidebarOpen && <main className='h-screen w-full absolute top-0 left-0 bg-black z-9 opacity-50'></main>}
        <Sidebar />
    </header>
  )
}

export default Navbar