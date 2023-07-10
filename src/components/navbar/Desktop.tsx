"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Desktop = () => {
  return (
    <nav className='flex items-center justify-between'>
        <div>
            <Image src="/assets/media/csis.png" alt="Brand Logo" width={150} height={150}/>
        </div>
        <div className='flex items-center gap-5'>
            <Link href="/">
                <p className="hover:text-black hover:bg-white hover:bg-opacity-90 hover:transition-all transition-all ease-in-out  duration-300 p-1 rounded-3xl w-20 text-center">Home</p>
            </Link>
            <Link href="/schedule">
                <p className="hover:text-black hover:bg-white hover:bg-opacity-90 hover:transition-all transition-all ease-in-out  duration-300 p-1 rounded-3xl w-20 text-center">Schedule</p>
            </Link>
            <Link href="/events">
                <p className="hover:text-black hover:bg-white hover:bg-opacity-90 hover:transition-all transition-all ease-in-out  duration-300 p-1 rounded-3xl w-20 text-center">Events</p>
            </Link>
            <Link href="/team">
                <p className="hover:text-black hover:bg-white hover:bg-opacity-90 hover:transition-all transition-all ease-in-out  duration-300 p-1 rounded-3xl w-20 text-center">Team</p>
            </Link>
        </div>
        <div>
            <Link href="/register" className='cursor-pointer'>
                <button className='cursor-pointer rounded-lg p-1 px-4 bg-gradient-to-r from-indigo-500 to-[#5336A7] hover:opacity-80 hover:-translate-y-1 transition ease-in-out delay-100'>Register</button>
            </Link>
        </div>
    </nav>
  )
}

export default Desktop