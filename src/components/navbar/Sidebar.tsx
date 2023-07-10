import { useNavbarMenuContext } from '@/context/NavbarMenuContext'
import {  IconX } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {

    //@ts-ignore
    const {isSidebarOpen,setIsSidebarOpen} = useNavbarMenuContext()
    const closeMenu = ()=>{
        setIsSidebarOpen(false)
    }
    return (
        <aside className={`min-h-screen z-50 absolute top-0 left-0 bg-[#000021] w-[90%] max-w-[250px] p-10 transition-all duration-300 ${isSidebarOpen  ? "opacity-100":"opacity-0 pointer-events-none"}`}>
            <header className='flex flex-col items-center gap-10'>
                <button className='cursor-pointer' onClick={closeMenu}>
                    <IconX size={30} color="red"/>
                </button>
                <Image src="/assets/media/csis.png" alt="Brand Logo" width={100} height={100}/>
            </header>
            <section className='flex flex-col items-center gap-5 mt-28'>
                <Link href="/">
                    <p className='text-sm sm:text-lg'>Home</p>
                </Link>
                <Link href="/schedule">
                    <p className='text-sm sm:text-lg'>Schedule</p>
                </Link>
                <Link href="/events">
                    <p className='text-sm sm:text-lg'>Events</p>
                </Link>
                <Link href="/team">
                    <p className='text-sm sm:text-lg'>Team</p>
                </Link>
            </section>
            <div className='mt-10 flex items-center justify-center'>
                <Link href="/register">
                    <button className='cursor-pointer rounded-lg p-1 px-4 bg-gradient-to-r from-indigo-500 to-[#5336A7] hover:opacity-80 hover:-translate-y-1 transition ease-in-out delay-100'>Register</button>
                </Link>
            </div>
        </aside>
    )
}

export default Sidebar