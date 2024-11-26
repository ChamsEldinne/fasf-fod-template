"use client"
import Box1 from "./Box1"
import food from "../assesst/food.png" 
import banner from "../assesst/banner.png"
import food2 from "../assesst/food2-plate.png"
import {motion} from "framer-motion" ;
function HotDessert() {
  return (
    <div className="flex flex-col mx-auto my-10 lg:mx-28 gap-10">
        <div className="flex flex-col gap-10  mb-10">
            <motion.h1 initial={{y:100 ,opacity:0}} whileInView={{y:0,opacity:1}} transition={{type:"keyframes",duration:0.3}} className="text-lime-600 text-2xl font-bold"> HOT DESSERT </motion.h1>
            <div className="flex justify-center lg:justify-between items center flex-wrap h-fit gap-2">
              <Box1 imgSrc={food.src} price={"5.55$"} />
              <Box1 imgSrc={food2.src} price={"6.55$"} />
              <Box1 imgSrc={banner.src} price={"7.55$"} />
            </div>
        </div>
        <div className="flex md:flex-row flex-col gap-y-10 justify-center md:justify-between items-center mb-20">
            <div  className="bg-co2 rounded-full  flex justify-center items-center w-[350px] h-[350px] md:w-[410px] md:h-[410px]">
                <motion.img whileHover={{scale:1.2,rotate:20 ,x:50,y:-60,}}  transition={{ ype:"keyframes",duration:0.8}} src={banner.src} className="w-full md:w-11/12 rounded-full"/>
            </div> 
            <div className="flex flex-col md:items-start items-center gap-5 w-[70vw] md:w-1/2">
                <motion.h1 initial={{opacity:0, y:100}} whileInView={{opacity:1,y:0}} transition={{type:"keyframes",duration:0.8}} className="text-2xl md:text-4xl font-black text-center md:text-left">THE BEST YOUMY FOOD IN THE TOWN</motion.h1>
                <motion.p initial={{opacity:0, y:100}} whileInView={{opacity:1,y:0}} transition={{type:"keyframes",duration:0.9}} className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea enim porro!</motion.p>
                <motion.button initial={{opacity:0, y:100}} whileInView={{opacity:1,y:0}} transition={{type:"keyframes",duration:1.1}} className="bg-lime-600 text-white font-semibold px-10 rounded-full flex justify-center items-center py-2">order now !</motion.button>
            </div>
        </div>
        
    </div>
  )
}


export default HotDessert ;