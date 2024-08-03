import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='p-4 shadow-sm border flex justify-between'>
      <div>

      </div>
      <div>
      <Image src={'/user.svg'} width={35} height={35} alt='user' className='rounded-full' />
      </div>
    </div>
  )
}

export default Header
