"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const createTree = () => {
    router.push(`/Generate?handle=${text}`)
  }
  const [text, settext] = useState("")
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[120vh] grid grid-cols-2">
        <div className="flex flex-col justify-center gap-2 ml-[5vw]">
          <p className="text-7xl font-bold text-[#d2e823]">Everything you 
            are. In one, simple link in bio.</p>
          <p className="text-white">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-2 items-center">
            <input onChange={(e)=>settext(e.target.value)} className="bg-white h-13 w-60 rounded-md px-2 focus:outline-[#254f1a]" placeholder="linktr.ee/" type="text" />
            <button onClick={()=>createTree()} className="bg-[#e9c0e9] rounded-full p-4 font-bold">Claim your Linktree</button>
          </div>
        </div>
        <div className="mr-[5vw] flex justify-center items-center">
          <img width={550}  src="ss.png" alt="screensgit" />
        </div>

      </section>
      <section className="bg-[#e9c0e9] min-h-[100vh] grid grid-cols-2">        
        <div className="ml-[5vw] flex justify-center items-center">
          <img width={330}  src="sss.png" alt="screensgit" />
        </div>
        <div className="flex flex-col justify-center items-center mr-[5vw]">
          <p className="text-7xl font-bold text-[#d2e823]">Create and customize your Linktree in minutes</p>
          <p className="text-white">Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p> 
        </div>
        </section>
      <section className="bg-[#780016] min-h-[100vh]"></section>
      
    </main>
  );
}
