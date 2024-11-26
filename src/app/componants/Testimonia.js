import React from 'react'
import person from "../assesst/skills-02.jpg" ;
import banner from "../assesst/banner.png" ;
function Testimonia() {
  return (
    <div className='mx-28 my-14'>
      <div className='flex md:flex-row flex-col gap-y-10 flex-wrap justify-between items-cneter'>
         <div className='flex flex-col gap-5 md:w-2/5'>
           <p className='text-xl md:text-2xl font-medium' style={{fontFamily:"serif"}}>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti blanditiis ipsam, optio molestias sit itaque a. Sint,ptio molestias sit itaque a. Sint, vero obcaecati. Ipsam.</p>
           <div className='w-32 h-14 flex items-center gap-2'>
              <img src={person.src} className='rounded-full w-2/5'/>
              <div className='flex flex-col '>
                 <h1 className=' text-md font-black'>John Doe</h1>
                 <p className='text-sm'>Designation</p>
              </div>
           </div>
         </div>
         <div className=' md:w-2/5'>
            <div className='bg-co2 rounded-full md:w-[350px]  md:h-[350px] '>
                <img src={banner.src}/>
            </div>
         </div>
      </div>
    </div>
  )
}
export default Testimonia;