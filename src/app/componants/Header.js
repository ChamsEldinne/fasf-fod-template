"use client"

import logo from"../assesst/logo.png"
import { MdOutlineShoppingCart } from "react-icons/md";
import {motion} from "framer-motion" ;
const headerEle=["Home", "About","Menu","Delivery","Contact Us"] ;
function Header() {

  return (
      <header>
         <div className="mx-auto md:mx-28">
            <motion.div className="flex h-20 items-center flex-row justify-between">
                   <motion.div
                     initial={{opacity:0 ,}}
                     animate={{opacity:1 , transition:1 , }}
                   className=" w-28  "> 
                      <img src={logo.src} className="w-full"/>
                   </motion.div>
                   <ul className="hidden md:flex gap-5 h-full w-fit items-center justify-center">
                    {headerEle.map((ele,index)=>{
                      const d=(index===0)? 0.1 :index*0.2;
                      return (
                        <motion.li
                        initial={{
                          y:-50 ,
                        }}
                        animate={{
                          y:0,
                        }}
                        transition={{
                          delay:d ,
                        }}
                  
                      className="text-lg font-bold cursor-pointer">{ele}</motion.li>
                      )
                    })}
                   </ul>
                   <motion.div 
                     initial={{
                      y:-50 ,
                      opacity:0 ,
                     }}
                     animate={{
                      y:0 ,
                      opacity:1 ,
                     
                     }}
                     transition={{
                       delay:1 ,
                     }}
                   className="w-10 h-10 bg-black flex justify-center rounded-full items-center">
                     <MdOutlineShoppingCart className="text-white text-xl"/>
                   </motion.div>
            </motion.div>
         </div>
      </header>
  )
}

export default Header