"use client"
import React from 'react'
import { motion } from 'framer-motion'
function Box1({imgSrc,price}) {
  return (
    <motion.div initial={{y:100 ,opacity:0}} whileInView={{y:0,opacity:1}} transition={{type:"keyframes",duration:0.6}} 
    className='flex w-[270px] md:w-[320px] h-[110px] lg:w-[350px] cursor-pointer lg:h-[130px] bg-white border-1 flex-row gap-2 justify-start shadow-lg items-center ' style={{border:"1px solid rgb(0,0,0,0.1)"}}>
        <img src={imgSrc} className='w-[100px]'/>
        <div className='w-1/3'>
            <h1 className='text-lg md:text-xl font-bold'>Hot cake</h1>
            <h2 className='text-yellow-600'>{price}</h2>
        </div>
    </motion.div>
  )
}

export default Box1