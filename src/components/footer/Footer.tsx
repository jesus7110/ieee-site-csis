"use client"
import { pushEmailInfo } from '@/firebase/firestore'
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitterFilled, IconMailFilled } from '@tabler/icons-react'
import { League_Spartan } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const titleFont = League_Spartan({ subsets: ['latin']})

const Footer = () => {
    const [email,setEmail] = useState("");

    const handleInputChange = (e:any)=>{
        setEmail(e.target.value)
    }

    const handleSubmit = async()=>{
        await pushEmailInfo({email})
        setEmail("")
    }

  return (
    <footer className='w-full py-10 pb-10 text-white z-100 bg-[#000021] border-t-[1px]'>
        <div className='w-[90%] mx-auto'>
            <section className='grid grid-cols-1 md:grid-cols-7 gap-5'>
                <div className={`flex flex-col ${titleFont.className} justify-end gap-10 md:col-span-3`}>
                    <div className={`flex flex-col items-start`}>
                        <h1 className='font-medium tracking-wide text-3xl lg:text-5xl'>Have a query?</h1>
                        <h1 className='font-medium tracking-wide text-3xl lg:text-5xl'>Contact Us</h1>
                        <p className='font-thin mt-4'>Contact CSIS 2023 Organising Committee</p>
                    </div>
                    <div>
                        <div className='max-w-[270px] w-[90%] border-2 border-white flex items-center justify-between p-1 rounded-lg'>
                            <input type="text" placeholder='enter your email' className='bg-transparent text-white outline-none placeholder:text-white p-1' value={email} onChange={handleInputChange}/>
                            <button className='cursor-pointer px-4 py-1 bg-white text-black rounded-lg font-bold' onClick={handleSubmit}>send</button>
                        </div>
                    </div>
                </div>
                <div className='border-t-2 md:border-l-2 md:border-t-0 pt-4 md:pt-0 md:pl-3 flex flex-col sm:flex-row gap-5 md:gap-10 md:col-span-4 justify-center'>
                    <div className='rounded-xl w-full sm:w-[50%] h-[100%] relative flex'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13712.486357095087!2d76.5783346!3d30.7711667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1688809129191!5m2!1sen!2sin" className="border-0 w-full"  loading="lazy" ></iframe>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-5'>
                        <div>
                            <h1 className={`font-medium text-lg md:text-2xl lg:text-4xl ${titleFont.className}`}>CSIS 2023</h1>
                            <div>
                                <p className='font-light text-xs md:text-xs underline'>CHANDIGARH UNIVERSITY, NH-05,</p>
                                <p className='font-light text-xs md:text-xs underline'>Ludhiana - Chandigarh State Hwy, Punjab</p>
                                <p className='font-light text-xs md:text-xs underline'>140413</p>
                            </div>
                        </div>
                        <p className='flex items-center gap-2 text-sm'><span><IconMailFilled/></span>cs.ieeecusb@gmail.com</p>
                        <div className='flex flex-col gap-2'>
                            <h1>Follow Us</h1>
                            <div className='flex items-center gap-3'>
                                <button className='hover:scale-125'>
                                    <a href="https://www.linkedin.com/company/ieeecs-cu/" target="_blank">
                                        <IconBrandLinkedin />
                                    </a>
                                </button>
                                <button className='hover:scale-125'>
                                    <a href="https://instagram.com/ieeecs.cu?igshid=YmM0MjE2YWMzOA=="target="_blank">
                                        <IconBrandInstagram />
                                    </a>
                                </button>
                                <button className='hover:scale-125'>
                                    <a href="https://www.facebook.com/profile.php?id=100094218553678"target="_blank">
                                        <IconBrandFacebookFilled />
                                    </a>
                                </button>
                                <button className='hover:scale-125'>
                                    <a href="https://twitter.com/ieeecs_cu"target="_blank">
                                        <IconBrandTwitterFilled />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='h-[2px] bg-white my-10'></div>
            <section className='grid grid-cols-2 sm:grid-cols-3'>
                <div className='hidden sm:block'></div>
                <div className='flex flex-col items-center gap-5'>
                    <Link href="/">
                        <p className='text-sm sm:text-lg'>Home</p>
                    </Link>
                    <Link href="/schedule">
                        <p className='text-sm sm:text-lg'>Schedule</p>
                    </Link>
                    <Link href="/events">
                        <p className='text-sm sm:text-lg'>Events</p>
                    </Link>
                    <Link href="/team">
                        <p className='text-sm sm:text-lg'>Teams</p>
                    </Link>
                </div>
                <div className='flex flex-col gap-2 h-full place-items-end place-content-end'>
                    <Image src="/assets/media/csis.png" alt="Brand Logo" width={130} height={130}/>
                    <p className='font-light text-xs'>&#169; IEEE CSIS 2023</p>
                </div>
            </section>
        </div>
    </footer>
  )
}

export default Footer