"use client"

import {pushRegistrationInfo} from '@/firebase/firestore'
import {  IconCheckbox, IconSquare } from '@tabler/icons-react'
import { Bebas_Neue } from 'next/font/google'
import Image from 'next/image'
import React,{useState,useRef} from 'react'


const bebas = Bebas_Neue({
    weight:["400"],
    subsets:['latin']   
})

const RegistrationForm = () => {

    const registrationForm = useRef(null)

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [organisation,setOrganisation] = useState("")
    const [contactNumber,setContactNumber] = useState("")
    const [email,setEmail] = useState("")
    const [ieeeMembershipStatus,setIeeeMembershipStatus] = useState("non-ieee-member")
    const [ieeeMembershipNumber,setIeeeMembershipNumber] = useState("")
    const [accommodation,setAccommodation] = useState(false)
    const [studentKit,setStudentKit] = useState("")

    const [totalCost,setTotalCost] = useState(0)

    const formSubmissionHandler = async (e:any)=>{
        e.preventDefault();
        // @ts-ignore
        if(registrationForm.current && registrationForm.current.checkValidity())
        {
            // Calculate Cost
            let cost = 0;

            if(ieeeMembershipStatus==="non-ieee-member")
            {
                cost += 1000;
            }
            else if(ieeeMembershipStatus==="ieee-member")
            {
                cost += 700   
            }
            else if(ieeeMembershipStatus==="ieee-computer-society-member")
            {
                cost += 500
            }

            if(accommodation)
            {
                cost += 1000
            }

            if(studentKit==="gold")
            {
                cost += 600
            }
            else if(studentKit==="silver")
            {
                cost += 500
            }
            else if(studentKit==="bronze")
            {
                cost += 200
            }
            setTotalCost(cost)

            // Submit to Firebase
            await pushRegistrationInfo({
                firstName,
                lastName,
                organisation,
                contactNumber,
                email,
                ieeeMembershipStatus,
                ieeeMembershipNumber,
                accommodation,
                studentKit,
                cost
            })
        }
            
    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>          
        <form onSubmit={formSubmissionHandler} ref={registrationForm}>
            <div className='flex-col flex gap-5'>
                <label>
                    <p>First Name <span className='text-red-600'>*</span></p>
                    <input className='text-white mt-2 px-2 py-1 min-w-[250px] bg-transparent outline-none border rounded-md' required type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                </label>
                <label>
                    <p>Last Name <span className='text-red-600'>*</span></p>
                    <input className='text-white mt-2 px-2 py-1 min-w-[250px] bg-transparent outline-none border rounded-md' required type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                </label>
                <label>
                    <p>Organisation <span className='text-red-600'>*</span></p>
                    <input className='text-white mt-2 px-2 py-1 min-w-[250px] bg-transparent outline-none border rounded-md' required type="text" value={organisation} onChange={(e)=>setOrganisation(e.target.value)}  />
                </label>
                <label>
                    <p>Contact Number <span className='text-red-600'>*</span></p>
                    <input className='text-white mt-2 px-2 py-1 min-w-[250px] bg-transparent outline-none border rounded-md' required type="text" maxLength={10} minLength={10} value={contactNumber} pattern='[0-9]{10}' onChange={(e)=>setContactNumber(e.target.value)}  />
                </label>
                <label>
                    <p>Email <span className='text-red-600'>*</span></p>
                    <input className='text-white mt-2 px-2 py-1 min-w-[250px] bg-transparent outline-none border rounded-md' required type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
                </label>
                <label>
                    <p>IEEE Memmbership Status</p>
                    <select className='text-white mt-2 px-2 py-1 min-w-[250px] bg-transparent outline-none border rounded-md' value={ieeeMembershipStatus} onChange={(e)=>setIeeeMembershipStatus(e.target.value)}>
                        <option value="non-ieee-member" className='bg-[#000021]'>Non-IEEE Member</option>
                        <option value="ieee-member" className='bg-[#000021]'>IEEE Member</option>
                        <option value="ieee-computer-society-member" className='bg-[#000021]'>IEEE Computer Society Member</option>
                    </select>
                </label>
                    {
                        ieeeMembershipStatus==="ieee-member"||ieeeMembershipStatus==="ieee-computer-society-member" ? 
                                <label>
                                    <p>IEEE Membership Number <span className='text-red-600'>*</span></p>
                                    <input required className='text-white mt-2 px-2 py-1 min-w-[250px] bg-transparent outline-none border rounded-md' type="text" value={ieeeMembershipNumber} onChange={(e)=>setIeeeMembershipNumber(e.target.value)}  />
                                </label> : <></>
                    }
                <label className='cursor-pointer flex items-center gap-2' onClick={()=>setAccommodation(x=>!x)}>
                    {accommodation ? 
                        <IconCheckbox size={25} color='green'/>
                        :
                        <IconSquare size={25}/>
                    }
                    <p>Accomodation</p>
                </label>
                <label>
                    <p>Student Kit</p>
                    <select className='text-white mt-2 px-2 py-1 min-w-[250px] bg-transparent outline-none border rounded-md' value={studentKit} onChange={(e)=>setStudentKit(e.target.value)}>
                        <option value="none" className='bg-[#000021]'>None</option>
                        <option value="gold" className='bg-[#000021]'>Gold</option>
                        <option value="silver" className='bg-[#000021]'>Silver</option>
                        <option value="bronze" className='bg-[#000021]'>Bronze</option>
                    </select>
                </label>
                <button type="submit" className='cursor-pointer rounded-lg p-1 px-4 bg-gradient-to-r from-indigo-500 to-[#5336A7] hover:opacity-80 hover:-translate-y-1 transition ease-in-out delay-100 w-[90%] '>Submit</button>
            </div>
        </form>
        <div className={`flex flex-col items-center gap-10 justify-center md:border-l-2 pl-5`}>
                <h1 className={`font-medium text-2xl flex flex-col items-center ${bebas.className}`}>You&apos;ve to pay <span>Rs. {totalCost}</span></h1>
              <Image src={'/assets/media/payment.svg'} width={300} height={200} alt='Vector' />
              <a href="https://forms.gle/HZtrKe7cYcoLW1S16" target='_blank' className='cursor-pointer rounded-lg p-1 px-4 bg-gradient-to-r from-indigo-500 to-[#5336A7] hover:opacity-80 hover:-translate-y-1 transition ease-in-out delay-100 w-[90%] text-center'>Upload proof of payment</a>
        </div>
    </div>
  )
}

export default RegistrationForm