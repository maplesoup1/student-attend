import { GraduationCap, Hand, LayoutIcon, Settings } from 'lucide-react'
import React from 'react'
import Image from 'next/image'


const SideNav = () => {

  const menuList = [
    {
      id: 1,
      name: 'Dashboard',
      icon: LayoutIcon,
      path: '/Dashboard'
    },
    {
      id: 2,
      name: 'Student',
      icon: GraduationCap,
      path: '/Dashboard/students'
    },
    {
      id: 3,
      name: 'Attendance',
      icon: Hand,
      path: '/Dashboard/atendance'
    },
    {
      id: 4,
      name: 'Setting',
      icon: Settings,
      path: '/Dashboard/settings'
    }
  ]

  return (
    <div className='border shadow-md h-screen p-5'>
      <Image src={'/logo.svg'} width={180} height={50} alt='logo' />
      <hr className='my-5'></hr>
      {menuList.map((menu, index) => (
        <h2 className='flex items-center gap-3 text-md p-4 text-slate-500 hover:bg-primary hover:text-white cursor-pointer rounded-lg my-2'>
          <menu.icon />
          {menu.name}
        </h2>
      ))}
      <div className='flex gap-2 items-center bottom-5 fixed p-4'>
        <Image src={'/user.svg'} width={35} height={35} alt='user' className='rounded-full' />
        <div>
          <h2 className='text-xs text-slate-400'>
            User Name
          </h2>
        </div>
      </div>

    </div>

  )
}

export default SideNav
