import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
    const { handle } = await params
  const client = await clientPromise
  const db = client.db("linktree")
    const collection = db.collection("links")

    const item = await collection.findOne({handle})
    if(!item){
      return notFound();
    }

  return <div className="min-h-[100vh] bg-black text-white flex flex-col justify-start p-[10vh] items-center">
    <div className="pic flex flex-col justify-center items-center m-3">
      <img className="rounded-full" width={100} src={item.pic} alt="" />
      <span className="font-bold">@{item.handle}</span>
      <div className="max-w-60 text-center">{item.bio}</div>
    </div>
    <div className="links">
      {item.links.map((link,index)=>{
        return <Link key={index} target="_blank" href={link.link}><div className="border-white border m-1 rounded-3xl p-2 min-w-2xs text-center hover:bg-white hover:text-black"> {link.text} </div></Link>
      })}
    </div>

  </div>
}
