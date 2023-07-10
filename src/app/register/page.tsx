import PersonCard from '@/components/personCard/PersonCard'
import RegistrationForm from '@/components/registration/RegistrationForm'
import { Bebas_Neue, League_Spartan } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const titleFont = League_Spartan({ subsets: ['latin']})
const bebas = Bebas_Neue({
  weight:["400"],
  subsets:['latin']
})

const Register = () => {
  

  const teamLeads = [
    {
      name:"LAKSHAY CHAWLA",
      title:"STUDENT MENTOR",
      image:"/assets/media/team/dipesh.png"
    },
    {
      name:"LAVANYA SAINI",
      title:"PROGRAM LEAD",
      image:"/assets/media/team/dipesh.png"
    },
    {
      name:"DIPESH RANJAN",
      title:"PROGRAM LEAD",
      image:"/assets/media/team/dipesh.png"
    },
    {
      name:"SHIVAM CHOPRA",
      title:"FINANCE LEAD",
      image:"/assets/media/team/dipesh.png"
    },
    {
      name:"RIYA SINGH",
      title:"WEBSITE LEAD",
      image:"/assets/media/team/dipesh.png"
    },
    {
      name:"KRISH AGARWAL",
      title:"BRANDING LEAD",
      image:"/assets/media/team/dipesh.png"
    },
    {
      name:"APOORVA DUBEY",
      title:"DOCUMENTATION LEAD",
      image:"/assets/media/team/dipesh.png"
    },
    {
      name:"NANDINI KATARE",
      title:"EDITORIAL LEAD",
      image:"/assets/media/team/dipesh.png"
    },
    {
      name:"PRABHJOT SINGH",
      title:"GRAPHICS LEAD",
      image:"/assets/media/team/dipesh.png"
    },
    {
      name:"SIMRAN KAUR",
      title:"MODERATION LEAD",
      image:"/assets/media/team/dipesh.png"
    },
    {
      name:"ANCHAL",
      title:"OPERATIONS LEAD",
      image:"/assets/media/team/dipesh.png"
    },
  ]

  const advisors = [
    {
      name:"DR. AMIT JAIN",
      title:"FACULTY ADVISOR",
      image:"/assets/media/team/dipesh.png"
    },
    {
      name:"ER. SUGANDHA SHARMA",
      title:"FACULTY ADVISOR",
      image:"/assets/media/team/dipesh.png"
    },
    {
      name:"UTKARSH SIDDHARTH",
      title:"VISIONARY",
      image:"/assets/media/team/dipesh.png"
    }
  ]
  
  const volunteers = [
    {
      role:"Website development",
      names:["VINIT KUMAR PARAKH"]
    },
    {
      role:"Graphics design",
      names:["NAMAN SHARMA"]
    },
    {
      role:"CONTENT WRITERS",
      names:["RANIA SYED"]
    },
    {
      role:"EVENT COORDINATION",
      names:["AYUSH JHA","KARTIK BANSAL"]
    },
    {
      role:"ANCHOR",
      names:["MUSKAN SINGH","MUSKAN TIWARI"]
    },
    {
      role:"PUBLIC RELATIONS",
      names:["TEJPREET SINGH"]
    },

  ]

  return (
    <main className='min-h-screen p-10  flex flex-col items-center gap-10 lg:gap-20'>
      
      <h1 className='font-bold text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#C4AAEE] from-0% via-[#A3BCFF] to-[#DC30DF] text-center'>REGISTRATION</h1>
      <p className='font-bold text-lg w-[90%]'>Register for CSIS 2023 to gain access to cutting-edge insights, network with industry leaders, and enhance your skills in the field of computer science. Join a vibrant community of like-minded individuals, showcase your talents, and unlock future opportunities. Don&apos;t miss out on this transformative event that will shape your career and inspire innovation.</p>

      <section className='rounded-2xl bg-[#121237] p-1 md:p-5 shadow-md shadow-blue-400 w-[100%] md:w-[90%] flex flex-col items-center gap-10 pt-10 min-w-[300px] md:min-w-none overflow-x-hidden scale-90 md:scale-100'>
        <h1 className={`${bebas.className} font-bold text-4xl`}>REGISTRATION FEES</h1>
        <table className='w-full min-w-[300px] md:min-w-none overflow-x-hidden'>
            <thead>
                <tr className='grid grid-cols-4 border-b-2'>
                    <th className='min-h-[100px] flex flex-col items-center justify-center text-sm md:text-md py-2 font-medium'></th>
                    <th className='min-h-[100px] flex flex-col items-center justify-center text-sm md:text-md py-2 border-l-2 font-medium'>IEEE Computer Society Member</th>
                    <th className='min-h-[100px] flex flex-col items-center justify-center text-sm md:text-md py-2 border-l-2 font-medium'>IEEE Member</th>
                    <th className='min-h-[100px] flex flex-col items-center justify-center text-sm md:text-md py-2 border-l-2 font-medium '>Non-IEEE Member</th>
                </tr>
            </thead>
            <tbody className=''>
                <tr className='grid grid-cols-4 text-center'>
                    <td className='min-h-[100px] flex flex-col items-center text-sm md:text-md justify-center font-light'>Base</td>
                    <td className='min-h-[100px] flex flex-col items-center text-sm md:text-md justify-center border-l-2 font-light'>Rs.500</td>
                    <td className='min-h-[100px] flex flex-col items-center text-sm md:text-md justify-center border-l-2 font-light'>Rs.700</td>
                    <td className='min-h-[100px] flex flex-col items-center text-sm md:text-md justify-center border-l-2 font-light'>Rs.1000</td>
                </tr>
            </tbody>
        </table>
      </section>
      <section className='rounded-2xl bg-[#121237] p-5 shadow-md shadow-blue-400 w-[100%] md:w-[90%] flex flex-col items-center gap-10 pt-10 min-w-[300px] md:min-w-none overflow-x-hidden'>
        <h1 className={`${bebas.className} font-bold text-4xl`}>ADD-ONS</h1>
        <table className='w-full min-w-[300px] md:min-w-none overflow-x-hidden'>
            <thead>
                <tr className='grid grid-cols-3 border-b-2'>
                    <th className='min-h-[100px] flex flex-col text-sm md:text-md items-center justify-center py-2 font-medium'></th>
                    <th className='min-h-[100px] flex flex-col text-sm md:text-md items-center justify-center py-2 border-l-2 font-medium'>PRICE</th>
                    <th className='min-h-[100px] flex flex-col text-sm md:text-md items-center justify-center py-2 border-l-2 font-medium'>INCLUDES</th>
                </tr>
            </thead>
            <tbody className=''>
                <tr className='grid grid-cols-3 text-center border-b-2'>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center text-sm md:text-md font-light'>Accommodation </td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center text-sm md:text-md border-l-2 font-light'>Rs.1000</td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center text-sm md:text-md border-l-2 font-light'>Stay + Food</td>
                </tr>
                <tr className='grid grid-cols-3 text-center border-b-2'>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md font-light uppercase'>KIT&#40;Bronze&#41;</td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md border-l-2 font-light'>Rs.200</td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md border-l-2 font-light'>Brochure + Notepad + Pen + Sponsor Goodies</td>
                </tr>
                <tr className='grid grid-cols-3 text-center border-b-2'>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md  font-light uppercase'>KIT&#40;Silver&#41;</td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md border-l-2 font-light'>Rs.500</td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md border-l-2 font-light'>Includes KIT &#40;BRONZE&#41; + CSIS T-Shirt</td>
                </tr>
                <tr className='grid grid-cols-3 text-center'>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center text-sm md:text-md font-light uppercase'>KIT&#40;Gold&#41;</td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md border-l-2 font-light'>Rs.600</td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md border-l-2 font-light'>Includes KIT &#40;SILVER&#41; + Chandigarh University Goodies</td>
                </tr>
            </tbody>
        </table>
      </section>
      <section className='rounded-2xl bg-[#121237] p-5 shadow-md shadow-blue-400 w-[100%] md:w-[90%] flex flex-col items-center gap-10 pt-10 min-w-[300px] md:min-w-none overflow-x-hidden'>
        <h1 className={`${bebas.className} font-bold text-4xl`}>BANK DETAILS</h1>
        <table className='w-full min-w-[300px] md:min-w-none overflow-x-hidden'>
            <tbody className=''>
                <tr className='grid grid-cols-2 text-center border-b-2'>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center text-sm md:text-md  font-bold'>Name</td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md border-l-2 font-light'>IEEE SB CU</td>
                </tr>
                <tr className='grid grid-cols-2 text-center border-b-2'>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center text-sm md:text-md font-bold'>Bank Name</td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md border-l-2 font-light'>HDFC Bank</td>
                </tr>
                <tr className='grid grid-cols-2 text-center border-b-2'>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md font-bold'>Bank A/c Number</td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md border-l-2 font-light'>50100416669684</td>
                </tr>
                <tr className='grid grid-cols-2 text-center border-b-2'>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md font-bold'>Type</td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md border-l-2 font-light'>Savings Account</td>
                </tr>
                <tr className='grid grid-cols-2 text-center border-b-2'>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md  font-bold'>MICR Code</td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md border-l-2 font-light'>160240086</td>
                </tr>
                <tr className='grid grid-cols-2 text-center border-b-2'>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md  font-bold'>IFS Code</td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md border-l-2 font-light'>HDFC0009421</td>
                </tr>
                <tr className='grid grid-cols-2 text-center'>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md  font-bold'>Bank Address</td>
                    <td className='min-h-[100px] flex flex-col items-center py-2 justify-center  text-sm md:text-md border-l-2 font-light'>CU Campus, Gharuan, Distt, SAS Nagar, Mohali, &#40;Punjab&#41; - 140413</td>
                </tr>
            </tbody>
        </table>
      </section>
      <br />
      <section className='w-[90%] flex flex-col items-center justify-center gap-10'>
        <h1 className='font-bold text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#C4AAEE] from-0% via-[#A3BCFF] to-[#DC30DF] text-center'>FORM</h1>
        <RegistrationForm/>
      </section>
    </main>
  )
}

export default Register