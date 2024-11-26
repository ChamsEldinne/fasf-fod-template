import React from 'react'
import Box2 from './Box2'
import food from "../assesst/food.png" 
import banner from "../assesst/banner.png"
import food2 from "../assesst/food2-plate.png"
function PopularProduct() {
  return (
    <div className='mx-auto lg:mx-28 my-20 h-fit'>
        <div className='flex flex-col items-center gap-20'>
             <h1 className='text-xl md:text-2xl font-black tracking-tight'>OUR POPULAR RECIPE</h1>
             <div className='flex flex-row  gap-5 justify-center flex-wrap md:justify-between md:w-10/12 items-center '>
                <Box2 imgsrc={food.src}/>
                <Box2 imgsrc={food2.src}/>
                <Box2 imgsrc={banner.src}/>
             </div>
        </div>

    </div>
  )
}

export default PopularProduct