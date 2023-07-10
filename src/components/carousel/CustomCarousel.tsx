import { Bebas_Neue } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const bebas = Bebas_Neue({
  weight:["400"],
  subsets:['latin']
})

const CustomCarousel = () => {
  return (
    <section className='p-3 min-h-[400px] flex gap-5 max-w-[280px] sm:max-w-[400px] mx-auto md:max-w-[700px] overflow-x-auto'>
      {/* Double */}
      <div className='grid grid-rows-2 min-w-[150px] items-center gap-5'>
        <Link href="/events">
          <div
              className="bg-cover bg-center h-[190px] hover:scale-110 transition-all duration-300"
              style={{
                backgroundImage: `url(assets/media/carousel/1.jpg)`,
              }}
          >
            <div className='bg-black w-full h-full bg-opacity-50'>
              <h1 className={`text-white-700 text-xl p-3 ${bebas.className} font-medium`}>IEEE Day</h1>
            </div>
          </div>
        </Link>
        <Link href="/events">
        <div
            className="bg-cover bg-center h-[190px] hover:scale-110 transition-all duration-300"
            style={{
              backgroundImage: `url(assets/media/carousel/2.jpg)`,
            }}
            >
              <div className='bg-black w-full h-full bg-opacity-50'>
                <h1 className={`text-white-700 text-xl p-3 ${bebas.className} font-medium`}>PAPER PRESENTATION</h1>
              </div>
            </div>
            </Link>
      </div>
      {/* Single */}
      <div className='grid grid-cols-1 h-[380px] min-w-[150px]'>
        <div className='grid grid-cols-1 bg-fuchsia-300'>
          <Link href="/events">
          <div
              className="bg-cover bg-center h-[400px] hover:scale-110 transition-all duration-300"
              style={{
                backgroundImage: `url(assets/media/carousel/3.jpg)`,
              }}
          >
            <div className='bg-black w-full h-full bg-opacity-50'>
              <h1 className={`text-white-700 text-xl p-3 ${bebas.className} font-medium`}>EXPERT TALK</h1>
            </div>
          </div>
          </Link>
        </div>
      </div>
      {/* Double */}
      <div className='grid grid-rows-2 min-w-[150px] items-center gap-5'>
        <Link href="/events">
        <div
            className="bg-cover bg-center h-[190px] hover:scale-110 transition-all duration-300"
            style={{
              backgroundImage: `url(assets/media/carousel/4.jpg)`,
            }}
        >
            <div className='bg-black w-full h-full bg-opacity-50'>
              <h1 className={`text-white-700 text-xl p-3 ${bebas.className} font-medium`}>EXPERT TALK</h1>
            </div>
        </div>
        </Link>
        <Link href="/events">
        <div
            className="bg-cover bg-center h-[190px] hover:scale-110 transition-all duration-300"
            style={{
              backgroundImage: `url(assets/media/carousel/5.jpg)`,
            }}
        >
          <div className='bg-black w-full h-full bg-opacity-50'>
              <h1 className={`text-white-700 text-xl p-3 ${bebas.className} font-medium`}>ICE BREAKER EVENTS</h1>
            </div>
        </div>
        </Link>
      </div>
      {/* Double */}
      <div className='grid grid-rows-2 min-w-[150px] items-center gap-5'>
        <Link href="/events">
        <div
            className="bg-cover bg-center h-[190px] hover:scale-110 transition-all duration-300"
            style={{
              backgroundImage: `url(assets/media/carousel/6.jpg)`,
            }}
        >
          <div className='bg-black w-full h-full bg-opacity-50'>
              <h1 className={`text-white-700 text-xl p-3 ${bebas.className} font-medium`}>WORKSHOP</h1>
            </div>
        </div>
        </Link>
        <Link href="/events">
        <div
            className="bg-cover bg-center h-[190px] hover:scale-110 transition-all duration-300"
            style={{
              backgroundImage: `url(assets/media/carousel/7.jpg)`,
            }}
        >
          <div className='bg-black w-full h-full bg-opacity-50'>
              <h1 className={`text-white-700 text-xl p-3 ${bebas.className} font-medium`}>DEBATE</h1>
            </div>
        </div>
        </Link>
      </div>
      {/* Single */}
      <div className='grid grid-cols-1 h-[380px] min-w-[150px]'>
        <div className='grid grid-cols-1 bg-fuchsia-300'>
          <Link href="/events">
          <div
              className="bg-cover bg-center h-[400px] hover:scale-110 transition-all duration-300"
              style={{
                backgroundImage: `url(assets/media/carousel/8.jpg)`,
              }}
          >
            <div className='bg-black w-full h-full bg-opacity-50'>
              <h1 className={`text-white-700 text-xl p-3 ${bebas.className} font-medium`}>E-WASTE EXTRAVAGANZA</h1>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CustomCarousel