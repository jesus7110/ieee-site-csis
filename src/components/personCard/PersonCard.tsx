import { Bebas_Neue, League_Spartan } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const titleFont = League_Spartan({ subsets: ['latin']})
const bebas = Bebas_Neue({
  weight:["400"],
  subsets:['latin']
})

const PersonCard = ({name,company, img}:{name:string,company:string, img:string}) => {
  return (
    <div className='w-[250px] min-h-[300px] bg-none border-2 cursor-pointer border-violet-600 rounded-lg group scale-75 md:scale-100'>
        <div className='w-[250px] h-[300px] relative'>
        {img.length>0?<>
            <div className='w-full h-[300px] relative grayscale group-hover:grayscale-0 scale-90 group-hover:scale-100 group-hover:transition-all transition-all duration-150 delay-100'>
                <Image src={img} alt={name} fill={true}/>
            </div>
        </>:<></>
        }
            <div className='absolute top-0 left-0 w-full flex flex-col items-start gap-1 p-2 opacity-100 group-hover:-translate-y-16 group-hover:opacity-0 transition-all duration-200 delay-200'>
                <p className={`${titleFont.className} text-lg  text-[#1B85B5] font-normal uppercase`}>{company}</p>
                <h1 className={`${bebas.className} text-2xl uppercase`}>{name}</h1>
            </div>
        </div>
    </div>
    )
}

export default PersonCard