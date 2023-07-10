import EventCard from '@/components/eventCard/EventCard'
import PersonCard from '@/components/personCard/PersonCard'
import React from 'react'

const Events = () => {

  const events = [
    {
      text:"Explore current challenges and opportunities in computer science through insightful panel discussions with industry experts." ,
      image:"/assets/media/events/panels-discussion.jpeg",
      name:"Engaging Panel Discussions"
    },
    {
      text:" Gain valuable insights from renowned researchers and industry leaders who will share their expertise and experiences." ,
      image:"/assets/media/events/expert-talks.jpeg",
      name:"Inspiring Expert Talks"
    },
    {
      text:"Enhance your skills and knowledge with interactive workshops led by experienced professionals in various computer science domains." ,
      image:"/assets/media/events/workshop.png",
      name:"Practical Hands-on Workshops"
    },
    {
      text:"Showcase your research and contribute to the academic community by presenting your papers at CSIS 2023." ,
      image:"/assets/media/events/paper-presentation.jpeg",
      name:"Platform for Paper Presentation"
    },
    {
      text:"Participate in an exciting art competition that promotes creative recycling and raises awareness about responsible e-waste management." ,
      image:"/assets/media/events/e-waste.png",
      name:"E-Waste Art Extravaganza"
    },
    {
      text:"Enjoy a vibrant cultural evening filled with diverse performances and talents from participants." ,
      image:"/assets/media/events/cultural-evening.png",
      name:"Cultural Evening"
    },
  ]

  const speakers = [
    {
      name:"Speaker 1",
      title:"Company name",
      image:"",
      text:"Lorem ipsum dolor sit amet blahblah bla Lorem ipsum dolor sit amet blahblah bla Lorem ipsum dolor sit amet blahblah bla Lorem ipsum dolor sit amet blahblah bla"
    },
    {
      name:"Speaker 1",
      title:"Company name",
      image:"",
      text:"Lorem ipsum dolor sit amet blahblah bla Lorem ipsum dolor sit amet blahblah bla Lorem ipsum dolor sit amet blahblah bla Lorem ipsum dolor sit amet blahblah bla"
    },
    {
      name:"Speaker 1",
      title:"Company name",
      image:"",
      text:"Lorem ipsum dolor sit amet blahblah bolor sit amet blahblah bla Lorem ipsum dolor sit amet blahblah bla"
    },
  ]

  return (
    <main className='min-h-screen p-5 flex flex-col items-center gap-10 lg:gap-20'>
        {/* <h1 className='font-bold text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#C4AAEE] from-0% via-[#A3BCFF] to-[#DC30DF] text-center'>SPEAKERS</h1>
        <section className='flex items-center justify-around flex-wrap gap-10'>
            {speakers.map((item,idx)=>(
              <div key={idx} className='flex flex-col items-center gap-3 sm:gap-10'>
                  <PersonCard company={item.title} img={item.image} name={item.name}/>
                  <p className={`leading-6 text-center max-w-[310px] font-bold`}>{item.text}</p>
              </div>
            ))}
        </section> */}

        <h1 className='font-bold text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#C4AAEE] from-0% via-[#A3BCFF] to-[#DC30DF] text-center'>EVENTS</h1>
        <section className='w-[50%] md:min-w-[700px] mx-auto grid grid-cols-1 gap-10'>
          {events.map((item,idx)=>(
            <div key={idx} className={`flex items-center md:items-start flex-col md:flex-row justify-center md:gap-10 text-2xl font-bold ${idx%2!==0 && "md:flex-row-reverse"}`}>
              <EventCard name={item.name} img={item.image}/>
              <p className={`${idx%2!==0?"md:text-end":"md:text-start"} leading-6 md:leading-10 text-sm md:text-xl text-center w-[90vw]`}>{item.text}</p>
            </div>
          ))}
        </section>
    </main>
  )
}

export default Events