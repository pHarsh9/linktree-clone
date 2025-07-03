"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const Navbar = () => {
  const pathName = usePathname();
  const showNavbar = ["/","/generate"].includes(pathName);
  return ( <> {showNavbar&&
    <nav className='bg-white w-[90vw] absolute ml-[5vw] right-[5vw] h-22 p-7.5 rounded-full top-12 flex justify-between'>
        <div className='flex gap-14 items-center'>
        <Link href={"/"}><img width={115} src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" /></Link>
        <ul className='flex gap-8 items-center'>
          <Link href={"/"}>  <li>Products</li> </Link>
          <Link href={"/"}>  <li>Templates</li> </Link>
          <Link href={"/"}>  <li>Matketplace</li> </Link>
          <Link href={"/"}>  <li>Learn</li> </Link>
          <Link href={"/"}>  <li>Pricing</li> </Link>
        </ul>
    </div>
    <div className='flex gap-2 items-center'>
      <Link href={"/login"}><button className='bg-[#f3f3f1] hover:bg-[#eff0ec] rounded-md px-6 py-5'>Log in</button></Link>
      <Link target='_blank' href={"https://github.com/pHarsh9/linktree-clone"} ><button className='bg-black rounded-full text-white p-5 hover:bg-[#1e2330] cursor-pointer'>GitHub</button></Link>
    </div>
    </nav>}
    </>
  )
}

export default Navbar
