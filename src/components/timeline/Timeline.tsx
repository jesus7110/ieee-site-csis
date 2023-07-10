"use client"
import React from 'react'

const Timeline = () => {
  
  return (
    <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative">
      <div className="border-l-2 mt-10">
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Registration Helpdesk</span></h1>
              <h1 className="text-xl font-bold">Venue : <span className='font-medium'>D1 Auditorium</span></h1> 
            </div>
            <div>
              <h1 className="text-sm">Aug 26, 2023</h1>
              <p className="text-sm">8:30 AM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Opening Ceremony</span></h1>
              <h1 className="text-xl font-bold">Venue : <span className='font-medium'>D1 Auditorium</span></h1> 
            </div>
            <div>
              <h1 className="text-sm">Aug 26, 2023</h1>
              <p className="text-sm">9:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Icebreaker Events</span></h1>
              <h1 className="text-xl font-bold">Venue  : <span className='font-medium'>D1 Auditorium</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 26, 2023</h1>
              <p className="text-sm">1:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Lunch</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 26, 2023</h1>
              <p className="text-sm">12:00 PM - 1:00 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Expert Talk 1</span></h1>
              <h1 className="text-xl font-bold">Venue  : <span className='font-medium'>D1 Auditorium</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 26, 2023</h1>
              <p className="text-sm">1:00 PM - 3:00 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Debate</span></h1>
              <h1 className="text-xl font-bold">Venue  : <span className='font-medium'>D1 Seminar Hall</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 26, 2023</h1>
              <p className="text-sm">3:00 PM - 5:00 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Worskhop &#40;Basic Level&#41;</span></h1>
              <h1 className="text-xl font-bold">Venue  : <span className='font-medium'>KCCRSST</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 26, 2023</h1>
              <p className="text-sm">3:00 PM - 5:00 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Expert Talks 2</span></h1>
              <h1 className="text-xl font-bold">Venue  : <span className='font-medium'>D1 Auditorium</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 27, 2023</h1>
              <p className="text-sm">10:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Expert Talks 3</span></h1>
              <h1 className="text-xl font-bold">Venue  : <span className='font-medium'>D1 Seminar Hall</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 27, 2023</h1>
              <p className="text-sm">10:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Panel Discussion</span></h1>
              <h1 className="text-xl font-bold">Venue  : <span className='font-medium'>D1 Seminar Hall</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 27, 2023</h1>
              <p className="text-sm">12:00 PM - 1:00 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Workshop &#40;Advanced Level&#41;</span></h1>
              <h1 className="text-xl font-bold">Venue  : <span className='font-medium'>KCCRSST</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 27, 2023</h1>
              <p className="text-sm">12:00 PM - 1:00 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Lunch</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 27, 2023</h1>
              <p className="text-sm">1:00 PM - 2:00 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Paper Presentation</span></h1>
              <h1 className="text-xl font-bold">Venue: <span className='font-bold'>D1 Seminar Hall</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 27, 2023</h1>
              <p className="text-sm">2:00 PM - 4:30 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>E-Waste Art</span></h1>
              <h1 className="text-xl font-bold">Venue: <span className='font-bold'>KCCRST</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 27, 2023</h1>
              <p className="text-sm">2:00 PM - 4:30 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Snack Break</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 27, 2023</h1>
              <p className="text-sm">4:30 PM - 5:00 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>E-Waste Art &#40;cont.&#41;</span></h1>
              <h1 className="text-xl font-bold">Venue  : <span className='font-medium'>KCCRST</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 27, 2023</h1>
              <p className="text-sm">5:00 PM - 5:30 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>D1 Auditorium</span></h1>
              <h1 className="text-xl font-bold">Venue  : <span className='font-medium'>Cultural Evening</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 27, 2023</h1>
              <p className="text-sm">6:00 PM - 8:00 PM</p>
            </div>
          </div>
        </div>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl font-bold"><span className='font-bold'>Breakfast and see off</span></h1>
            </div>
            <div>
              <h1 className="text-sm">Aug 28, 2023</h1>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Timeline