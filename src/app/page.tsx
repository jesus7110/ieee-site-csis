"use client"
import CustomCarousel from '@/components/carousel/CustomCarousel'
import { IconPlaylist, IconPlaylistAdd, IconPlaylistOff, IconPlaylistX } from '@tabler/icons-react'
import { Bebas_Neue, League_Spartan } from 'next/font/google'
import Image from 'next/image'
import { CountUp } from 'use-count-up'

const titleFont = League_Spartan({ subsets: ['latin']})
const bebas = Bebas_Neue({
  weight:["400"],
  subsets:['latin']
})

export default function Home() {
  return (
      <main className='min-h-screen '>
          <video muted loop autoPlay className='absolute top-0 left-0 w-full min-h-[100vh] -z-50'>
                <source src="/assets/media/bg-vid.mp4" type="video/mp4" />
                <source src="/assets/media/bg-vid.mp4" type="video/ogg" />
                Your browser does not support the video tag.
            </video>
          <div className='bg-black bg-opacity-80 w-full min-h-[140vh] absolute top-0 left-0 -z-40'></div>
          <div className=' w-full p-10 flex flex-col justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 items-start justify-start w-[90%] m-auto'>
              <div className='flex flex-col items-center sm:items-start gap-10  md:gap-20 hover:animate-pulse w-[90%] m-auto'>
                <h1 className='font-medium text-center sm:text-start text-2xl md:text-3xl lg:text-4xl xl:text-6xl leading-loose'>Computer Society India Symposium 2023</h1>
                <div>
                  <h1 className={`text-xl md:text-2xl lg:text-3xl xl:text-5xl text-center sm:text-start ${titleFont.className }`}>Chandigarh University</h1>
                  <h1 className={`text-lg md:text-xl lg:text-2xl xl:text-4xl text-center sm:text-start ${titleFont.className}`} >Welcomes you for CSIS 2023</h1>
                </div>
              </div>
              <div className='flex justify-center sm:justify-center'>
                {/* Image  */}
                <div className='hidden sm:block relative w-[150px] h-[150px] sm:w-[350px] sm:h-[300px] lg:w-[90%] lg:h-[600px] anim'>
                  <Image src="/assets/media/mascot.png" alt="Mascot" fill={true}/>
                </div>
                <div className='sm:hidden relative w-[150px] h-[150px] sm:w-[350px] sm:h-[250px] lg:w-[500px] lg:h-[400px]'>
                  <Image src="/assets/media/mascot.png" alt="Mascot" fill={true}/>
                </div>
              </div>
            </div>
            <div className='w-[60%] mx-auto min-w-[250px] bg-blue-950 flex justify-around items-center p-2 md:p-5 rounded-xl mt-10 bg-opacity-50 hover:animate-pulse backdrop-blur-lg'>
              <div className='flex flex-col gap-2 items-center'>
                <h1 className='text-lg sm:text-2xl  '><CountUp isCounting end={250} duration={2}/>+</h1>
                <p className='text-xs sm:text-xl text-sky-500 '>Attendees</p>
              </div>
              <div className='flex flex-col gap-2 items-center'>
                <h1 className='text-lg sm:text-2xl  '><CountUp isCounting end={10} duration={3}/>+</h1>
                <p className='text-xs sm:text-xl text-sky-500 '>Events</p>
              </div>
              <div className='flex flex-col gap-2 items-center'>
                <h1 className='text-lg sm:text-2xl  '><CountUp isCounting end={40} duration={4}/>+ Hrs</h1>
                <p className='text-xs sm:text-xl text-sky-500 '>Engagement</p>
              </div>
            </div>
          </div>
          {/* Section 2 */}
          <div className='min-h-[90vh] w-full bg-[#000021] grid md:grid-cols-5 gap-10 relative p-10'>
            <div className='md:col-span-1 hidden md:block'>
              <Image src="/assets/media/10.png" alt="The logo" width={500} height={100} className='absolute top-0 -translate-x-[15rem] z-10 opacity-30'/>
            </div>
            <div className={`flex flex-col items-start ${titleFont.className} md:col-span-2 z-0 justify-center gap-5`}>
              <div>
                <h1 className={`${bebas.className} font-medium text-4xl sm:text-5xl`}>THE MOST</h1>
                <h1 className={`${bebas.className} font-medium text-6xl sm:text-7xl text-transparent  bg-clip-text bg-gradient-to-r from-[#A0E0EE] to-[#FFAEFC]`}>AWAITED</h1>
                <h1 className={`${bebas.className} font-medium text-4xl sm:text-5xl`}>IEEE EVENT IS HERE !</h1>
              </div>
              <div>
                <p>Join us for the prestigious Computer Society India Symposium (CSIS) at Chandigarh University. Discover a captivating blend of technical expertise, engaging activities, and networking opportunities. Experience a vibrant learning ecosystem that fosters innovation, collaboration, and growth in the field of computer science.</p>
              </div>
            </div>
            <div className='md:col-span-2'>
              <CustomCarousel/>
            </div>
          </div>
          {/* Section 3 */}
          <div className='min-h-[20vh] bg-[#000021] p-5 flex flex-col items-center gap-5'>
            <h1 className={`font-medium text-4xl md:text-6xl ${bebas.className}`}>OUR <span className='text-[#1B85B5]'>EVENT</span> PARTNERS</h1>
            <div className='flex flex-col sm:flex-row gap-0  sm:gap-10 md:gap-20 justify-center w-full items-center flex-wrap'>
              <div className='relative w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] opacity-70'>
                <Image src="/assets/media/logo1.png" alt="Logo" fill={true}/>
              </div>
              <div className='relative w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] opacity-70'>
                <Image src="/assets/media/logo2.png" alt="Logo" fill={true}/>
              </div>
              <div className='relative w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] opacity-70'>
                <Image src="/assets/media/logo3.png" alt="Logo" fill={true}/>
              </div>
              <div className='relative w-[130px] h-[30px] mt-4 sm:mt-0 sm:w-[160px] sm:h-[50px] opacity-70'>
                <Image src="/assets/media/logo4.png" alt="Logo" fill={true}/>
              </div>
            </div>
          </div>
          {/* Section 4 */}
          <div className='bg-[#000021] p-5 flex flex-col items-center gap-5 pt-10'>
              <h1 className={`font-medium text-4xl md:text-6xl ${bebas.className}`}>WHY <span className='text-[#FF8066]'>CSIS</span> 2023?</h1>
              <section className='relative mt-5 pb-10 w-full'>
                <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-10'>
                  <div className='flex flex-col items-center gap-10'>
                    <div className='relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]'>
                       <Image src="/assets/media/icon1.svg" alt="The icon" fill={true}/>
                    </div>
                    <div className='flex flex-col items-center'>
                      <h1 className={`${bebas.className} text-xl lg:text-3xl font-medium`}>EXPAND YOUR</h1>
                      <h1 className={`${bebas.className} text-4xl lg:text-6xl font-medium text-[#1B85B5]`}>KNOWLEDGE</h1>
                    </div>
                    <p className='text-center font-light text-sm lg:text-md'>
                      CSIS 2023 offers a unique opportunity to expand your knowledge and stay updated on the latest advancements in the field of computer science. Engage with industry experts, attend insightful talks and workshops, and gain valuable insights that will enhance your understanding of cutting-edge technologies and trends.
                    </p>
                  </div>
                  <div className='flex flex-col items-center gap-10'>
                    <div className='relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]'>
                       <Image src="/assets/media/icon2.svg" alt="The icon" fill={true}/>
                    </div>
                    <div className='flex flex-col items-center'>
                      <h1 className={`${bebas.className} text-xl lg:text-3xl font-medium`}>INCREASE YOUR</h1>
                      <h1 className={`${bebas.className} text-4xl lg:text-6xl font-medium text-[#1B85B5]`}>NETWORKS</h1>
                    </div>
                    <p className='text-center font-light text-sm lg:text-md'>
                      Connect with influential industry leaders, researchers, and professionals from diverse backgrounds at CSIS 2023. Forge valuable connections, exchange ideas, and build a strong professional network that can open doors to new career opportunities, collaborations, and mentorship.    
                    </p>
                  </div>
                  <div className='flex flex-col items-center gap-10'>
                    <div className='relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]'>
                       <Image src="/assets/media/icon3.svg" alt="The icon" fill={true}/>
                    </div>
                    <div className='flex flex-col items-center'>
                      <h1 className={`${bebas.className} text-xl lg:text-3xl font-medium`}>SHOWCASE YOUR</h1>
                      <h1 className={`${bebas.className} text-4xl lg:text-6xl font-medium text-[#1B85B5]`}>SKILLS</h1>
                    </div>
                    <p className='text-center font-light text-sm lg:text-md'>
                    CSIS 2023 provides a platform for you to showcase your skills, projects, and research findings. Present your work through paper presentations, project exhibitions, and hackathons, gaining recognition for your achievements and receiving valuable feedback from experts in the field.                    </p>
                  </div>
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className='relative w-[250px] h-[125px] md:w-[500px] md:h-[250px] lg:w-[1000px] lg:h-[500px] mx-auto'>
                      <Image src="/assets/media/11.png" alt="The logo" fill={true}/>
                  </div>
                </div>
              </section>
          </div>
          {/* Section 5 */}
          <div className='min-h-[50vh] bg-[#000021] p-5 flex flex-col items-center gap-7 pt-20'>
            <h1 className={`font-medium text-4xl md:text-6xl ${bebas.className}`}><span className='text-[#1B85B5]'>VIDEOS</span> ON DEMAND</h1>
            <h1 className='flex items-center gap-3 text-sm'>Hit the <span><Image src="/assets/media/playlist-icon.svg" alt="Playlist Icon" width={20} height={20} /></span> to view all of our other videos</h1>
            {/* <video muted loop autoPlay className='w-full min-h-[100vh] absolute top-0 left-0'>
                  <source src="/assets/media/bg-vid-2.mp4" type="video/mp4" />
                  <source src="/assets/media/bg-vid-2.mp4" type="video/ogg" />
            </video> */}
            {/* <section className='w-[90%] mx-auto max-w-[400px]'>
               <iframe className='w-full h-[300px] border-2 px-3 rounded-lg border-gray-600' src="https://www.youtube.com/embed/videoseries?list=PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </section> */}
            <div className="mx-auto flex  max-w-[800px] items-start justify-center">
              <div className="h-full w-full rounded-md bg-gradient-to-r from-blue-400 via-red-500 to-violet-600 p-1">
                <div className="flex h-full w-full items-center justify-center bg-[#000021] back">
                  <iframe className='w-[250px] h-[250px] md:w-[700px] md:h-[400px] p-2' src="https://www.youtube.com/embed/videoseries?list=PLDN1NUVswBl3RbSsJv1SnEaKQzf0HIYvF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                 </div>
              </div>
            </div>
          </div>
      </main>  
    )
            
}
