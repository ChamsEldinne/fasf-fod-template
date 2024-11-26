"use client"
import React from 'react'
import { useState } from 'react'
import {motion} from "framer-motion"
function Box2({imgsrc}) {
  const[displayBtn,setDipslayBtn]=useState(false) ;
  return (
    <div  onMouseEnter={()=>{setDipslayBtn(true)}} onMouseLeave={()=>{setDipslayBtn(false)}} className='w-[220px] h-[330px]  flex flex-col items-center gap-2 rounded-lg bg-white shadow-lg' style={{border:"1px solid rgb(0,0,0,0.1)"}}>
        <motion.img whileHover={{rotate:60,x:30 ,y:-30}} transition={{type:"keyframes" ,duration:0.3}} src={imgsrc} className='h-3/5 cursor-none' />
        <motion.button whileHover={{scale:1.2}} transition={{type:"keyframes" ,duration:0.2}} className='px-4 py-2 bg-lime-700 text-white rounded-full' style={{display: displayBtn ? "block":"none"}}>Buy Now</motion.button>
        <h1 className='text-xl font-medium'>Hot cake</h1>
        <h2 className='text-lg text-yellow-600 font-bold'>5.55$</h2>
    </div>
  )
}

export default Box2