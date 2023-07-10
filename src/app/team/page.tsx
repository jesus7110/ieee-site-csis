import PersonCard from '@/components/personCard/PersonCard'
import { Bebas_Neue, League_Spartan } from 'next/font/google'
import React from 'react'

const titleFont = League_Spartan({ subsets: ['latin']})
const bebas = Bebas_Neue({
  weight:["400"],
  subsets:['latin']
})

const Team = () => {
  

  const teamLeads = [
    {
      name:"LAKSHAY CHAWLA",
      title:"STUDENT MENTOR",
      image:"/assets/media/team/lakshay.png"
    },
    {
      name:"LAVANYA SAINI",
      title:"PROGRAM LEAD",
      image:"/assets/media/team/lavanya.png"
    },
    {
      name:"DIPESH RANJAN",
      title:"PROGRAM LEAD",
      image:"/assets/media/team/dipesh.png"
    },
    {
      name:"SHIVAM CHOPRA",
      title:"FINANCE LEAD",
      image:"/assets/media/team/shivam.png"
    },
    {
      name:"RIYA SINGH",
      title:"WEBSITE LEAD",
      image:"/assets/media/team/riya.png"
    },
    {
      name:"KRISH AGARWAL",
      title:"BRANDING LEAD",
      image:"/assets/media/team/krish.png"
    },
    {
      name:"APOORVA DUBEY",
      title:"DOCUMENTATION LEAD",
      image:"/assets/media/team/apoorva.png"
    },
    {
      name:"NANDINI KATARE",
      title:"EDITORIAL LEAD",
      image:"/assets/media/team/nandini.png"
    },
    {
      name:"PRABHJOT SINGH",
      title:"GRAPHICS LEAD",
      image:"/assets/media/team/prabhjot.png"
    },
    {
      name:"SIMRAN KAUR",
      title:"MODERATION LEAD",
      image:"/assets/media/team/simran.png"
    },
    {
      name:"ANCHAL",
      title:"OPERATIONS LEAD",
      image:"/assets/media/team/anchal.png"
    },
  ]

  const advisors = [
    {
      name:"DR. AMIT JAIN",
      title:"FACULTY ADVISOR",
      image:"/assets/media/team/amit.png"
    },
    {
      name:"ER. SUGANDHA SHARMA",
      title:"FACULTY ADVISOR",
      image:"/assets/media/team/sugandha.png"
    },
    {
      name:"UTKARSH SIDDHARTH",
      title:"VISIONARY",
      image:"/assets/media/team/utkarsh.png"
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
      <h1 className='font-bold text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#C4AAEE] from-0% via-[#A3BCFF] to-[#DC30DF] text-center'>ADVISORS</h1>
      <section className='flex items-center justify-around flex-wrap sm:gap-10'>
          {advisors.map((item,idx)=>(
              <PersonCard company={item.title} img={item.image} name={item.name} key={idx}/>
          ))}
      </section>
      <h1 className='font-bold text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#C4AAEE] from-0% via-[#A3BCFF] to-[#DC30DF] text-center'>TEAM LEADS</h1>
      <section className='flex items-center md:gap-20 flex-wrap justify-center max-w-[1000px]'>
        {teamLeads.map((item,idx)=>(
          <PersonCard company={item.title} name={item.name} img={item.image} key={idx}/>
        ))}
      </section>
      <h1 className='font-bold text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#C4AAEE] from-0% via-[#A3BCFF] to-[#DC30DF] text-center'>VOLUNTEERS</h1>
      <section className='flex flex-col items-center gap-10'>
        {volunteers.map((item,idx)=>(
            <div key={idx}>
              <h1 className={`${bebas.className} uppercase font-bold text-center text-xl md:text-3xl`}>{item.role}</h1>
              <div className='flex flex-col items-center gap-5'>
                {item.names.map(name=>(
                  <>
                    <h1 className={`text-[#1B85B5] text-lg md:text-xl`}>{name}</h1>
                  </>
                ))}
              </div>
            </div>
        ))}
      </section>
    </main>
  )
}

export default Team