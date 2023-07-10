import { Bebas_Neue, League_Spartan } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const titleFont = League_Spartan({ subsets: ['latin']})
const bebas = Bebas_Neue({
  weight:["400"],
  subsets:['latin']
})

const EventCard = ({name, img}:{name:string,img:string}) => {
  return (
    <div className='w-[250px] min-h-[250px] bg-none cursor-pointer group scale-75 md:scale-100 '>
        <div className='w-[250px] h-[250px] relative'>
        <div className='w-full h-[250px] relative grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 border-2 border-violet-600 rounded-lg group-hover:transition-all transition-all duration-150 delay-100'>
            <Image src={img} alt={name} fill={true} className=' rounded-lg' objectFit="cover"/>
        </div>
            <div className='absolute bottom-0 left-0 w-full flex flex-col gap-1 p-2 opacity-100 group-hover:-translate-y-16 group-hover:opacity-0 transition-all duration-200 delay-200'>
                <h1 className={`${bebas.className} text-2xl uppercase text-center text-white bg-black bg-opacity-20`}>{name}</h1>
            </div>
        </div>
    </div>
    )
}

export default EventCard