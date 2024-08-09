"use client";
import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import Chat from './_components/chat'

const page = () => {
    const { setTheme } = useTheme()
    useEffect(()=> {
        setTheme('system')
    },[])
  return (
    <div>
      <Chat/>
    </div>
  )
}

export default page
