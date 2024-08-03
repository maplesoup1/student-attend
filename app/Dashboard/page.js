"use client";
import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'

const page = () => {
    const { setTheme } = useTheme()
    useEffect(()=> {
        setTheme('system')
    },[])
  return (
    <div>
      Page
    </div>
  )
}

export default page
