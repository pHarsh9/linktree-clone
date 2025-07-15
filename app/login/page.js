"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
const login = () => {
  const [logini, setlogin] = useState("");
  const [username, setUsername] = useState("")
  const handleChange = (e) => {
    const info = e.target.value
    setlogin(info)
    const i = info.replace(/^@/, '');
    console.log(i)
    setUsername(i)

  }

  return (
    <div className='bg-[#225ac0] grid grid-cols-2'>
      <div className='flex flex-col justify-center gap-5 items-center'>
        <h1 className='font-bold text-3xl text-[#c2d816]'>Login to your Linktree</h1>
        <div className='flex flex-col items-end gap-2'>
          <input value={logini} onChange={handleChange} className='bg-[#F6F7F5] p-1.5 rounded-3xl' type="text" placeholder='@your_handle' />
          <Link href={`/${username}`}>  <button className='hover:cursor-pointer bg-[#c2d816] text-white font rounded-full p-2'>Login</button></Link>
        </div>
      </div>
      <div className=''>
        <img className='h-[100vh] w-[100vw] object-contain' src="generate.webp" alt="" />
      </div>
    </div>
  )
}

export default login
