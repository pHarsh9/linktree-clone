"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

const generate = () => {
  const searchParams = useSearchParams();
  const [bio,setbio]=useState("")
  const [links, setLinks] = useState([{link:"", text:""}])
  const [handle, sethandle] = useState(searchParams.get('handle'));
  const [pic, setpic] = useState("")
  const handleChange  = (index, link, text) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item,i)=>{
      if(i==index){
        return{link,text}
      }
      else{
        return item
      }
         })
    }
    )
  }
  const addLink = () => {
    setLinks(links.concat([{link:"",text:""}]))
  }
  
  
  const submitLink = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "handle": handle,
      "bio":bio,
      "links": links,
      "pic":pic
    });
      console.log(raw)
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions)
    const result = await r.json();
    if(result.success){
    toast.success(result.message,{
      position: 'bottom-right',
    })
    setLinks([{link:"", text:""}]);
    sethandle("");
    setpic("")
    setbio("")
    }
    else{
      toast.error(result.message,{
      position: 'bottom-right',
    })
    }
  };
  return (
    <div className='bg-[#225ac0] grid grid-cols-2'>
      <div className='flex flex-col justify-center gap-5 items-center'>
        <h1 className='font-bold text-3xl text-[#c2d816]'>Claim your Linktree</h1>
        <div className='flex flex-col gap-2'>
          <input value={handle} onChange={e => { sethandle(e.target.value) }} className='bg-[#F6F7F5] p-1.5 rounded-3xl' type="text" placeholder='Choose your handle' />
          <input value={bio} onChange={e => { setbio(e.target.value) }} className='bg-[#F6F7F5] p-1.5 rounded-3xl' type="text" placeholder='Bio' />
          <h3 className='font-bold text-[#c2d816]'>Add your links:</h3>
          {links && links.map((item,index)=>{
            return <div className='flex gap-2' key={index}>
            <input value={item.text} onChange={e=>{handleChange(index,item.link, e.target.value)}} className='bg-[#F6F7F5] p-1.5 rounded-3xl' type="text" placeholder='Add link text' />
            <input value={item.link} onChange={e=>{handleChange(index, e.target.value, item.text)}} className='bg-[#F6F7F5] p-1.5 rounded-3xl' type="text" placeholder='Add link' />
            </div>})}
          
            <button onClick={()=>addLink()} className='hover:cursor-pointer bg-[#c2d816] text-white font rounded-full p-2'>Add more links</button>
          <input value={pic} onChange={e=>{setpic(e.target.value)}} className='bg-[#F6F7F5] p-1.5 rounded-3xl focus:border-black' type="text" placeholder='Add link to your picture' />
        </div>
        <button disabled={handle==""|| pic==""|| links[0].text==""|| links[0].link==""} onClick={()=>submitLink()} className='hover:cursor-pointer bg-[#c2d816] text-white font rounded-full p-2 disabled:bg-[#FDE68A]'>Create your Linktree</button>
      </div>
      <div className=''>
        <img className='h-[100vh] w-[100vw] object-contain' src="generate.webp" alt="" />
      </div>
            <ToastContainer />
    </div>
  )
}

export default generate
