"use client" 
import React from 'react' ;
import leaf from"../assesst/leaf.png" ;
import { MdOutlineShoppingCart } from "react-icons/md";
import banana from "../assesst/banana2.png"
import food from"../assesst/food.png" ;
import spoon from "../assesst/spoon.png" ;
import {motion} from "framer-motion" ;

function Main() {
  return (
    <div>
        <div className=''>
               <div className='lg:px-24 gap-y-2 lg:gap-6 flex md:flex-row flex-col justify-center md:justify-between items-center min-h-[100vh] bg-[rgb(255 ,151 ,242 )] overflow-hidden'>
                  <div className='flex flex-col gap-2 md:w-[45vw] h-full items-center md:items-start justify-center'>
                      <motion.div initial={{ y:100 ,  opacity:0 , }}
                        animate={{ y:0 ,opacity:1 , }}
                        transition={{ type:"keyframes",duration:0.5 ,}}
                      className='flex gap-6 w-fit'>
                        <h1 className='text-5xl md:text-6xl  lg:text-8xl tracking-wider text-outline font-bold stroke text-transparent'>YUMMI</h1>
                        <img src={leaf.src}  className='w-10 h-10 lg:w-12 lg:h-12'/>
                      </motion.div>
                      <motion.h1 
                        initial={{ y:100 , opacity:0 ,}}
                        animate={{y:0 , opacity:1}}
                        transition={{type:"keyframes",duration:0.9 ,
                        }}
                      className='text-5xl md:text-6xl lg:text-8xl tracking-wide text-outline font-bold'>BREAKFAST</motion.h1>
                      <motion.p  initial={{y:100 ,opacity:0 ,}}
                        animate={{y:0 ,opacity:1 ,}}
                        transition={{ type:"keyframes",duration:1.2 ,}} 
                        className='text-sm md:text-md h-fit w-2/3 md:w-full text-center md:text-left'
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos temporibus perspiciatis soluta?</motion.p>
                      <motion.button 
                       initial={{ y:100 ,opacity:0 ,}}
                      animate={{y:0 , opacity:1 , }}
                      transition={{type:"keyframes",duration:1.4 ,}}
                       className='bg-lime-600 font-semibold my-4 w-36 text-white rounded-full flex justify-center items-center py-2'><MdOutlineShoppingCart/>order now</motion.button>
                  </div>
                  <motion.div 
                   initial={{ x:100 , y:100,rotate: 20 , opacity:0 ,}}
                   animate={{x:0 ,y:0 ,rotate:0 , opacity:1, }}
                   transition={{type:"keyframes", duration:1 ,}}
                  className='w-[65vw] md:w-[45vw] h-full flex justify-center items-center relative' >
                    <div className='w-full h-full relative z-10'>
                       <img src={food.src} className='w-10/12 z-10'/>
                       <img src={banana.src} className='w-2/3 top-0 right-[-70px] absolute z-10'/>
                       <img src={spoon.src} className='w-2/3 top-[130px] md:top-[170px] lg:top-[270px]  rotate-[85deg] left-[-50px] absolute z-10'/>
                    </div>
                    <div className='bg-co2 w-[75vw] h-[120vh] absolute left-[340px] md:top-[-400px] lg:-top-40 z-0 skew-x-[-230deg]' ></div>
                  </motion.div>
               </div>
        </div>
    </div>
  )
}

export default Main ;