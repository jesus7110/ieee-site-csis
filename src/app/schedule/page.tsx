import React from 'react'
import { League_Spartan } from 'next/font/google'
import Image from 'next/image'
import Timeline from '@/components/timeline/Timeline'

const titleFont = League_Spartan({ subsets: ['latin']})


const Schedule = () => {
  return (
    <main className='min-h-screen py-5 px-12 flex flex-col gap-10'>
        <h1 className='font-bold text-4xl lg:text-6xl text-transparent text-center bg-clip-text bg-gradient-to-r from-[#C4AAEE] from-20% via-[#A3BCFF] to-[#DC30DF] to-70%'>SCHEDULE</h1>
        
        {/* Schedule Banner */}
        {/* <div className='w-full h-72 rounded-3xl bg-indigo-900'></div> */}
        <Timeline/>
        {/* Content */}
        <div className={`${titleFont.className} font-bold md:text-xl`}>
          <Image className='w-52 md:w-72 absolute right-0 -bottom-72 -z-20' src={'/assets/media/cal.svg'} width={100} height={100} alt='Calendar Image' />
        </div>


    </main>
  )
}

export default Schedule