import { useNavbarMenuContext } from '@/context/NavbarMenuContext'
import { IconMenu2 } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

const Mobile = () => {
  //@ts-ignore
  const {isSidebarOpen,setIsSidebarOpen} = useNavbarMenuContext()
  const handleClick = ()=>{
    setIsSidebarOpen(true)
  }
  return (
    <nav className='flex items-center justify-between'>
        <div className='flex items-center justify-center'>
            <Image src="/assets/media/csis.png" alt="Brand Logo" width={70} height={70}/>
        </div>
        <div className='flex items-center justify-center'>
            <button className='cursor-pointer' onClick={handleClick}><IconMenu2 size={30}/></button>
        </div>
    </nav>
  )
}

export default Mobile