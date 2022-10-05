import React from 'react'
import ALogin from './ALogin'
import GLogin from './GLogin'

const FormMain = () => {
   return (
      <div>
         <GLogin />
         <ALogin />
         <div className='w-[300px] max-w-[380px] my-1'>
            <div className='flex-row mx-[-4px] my-[4px] flex items-center'>
               <div className='mx-1 justify-center basis-0 min-w-0 flex-1'>
                  <div className='bg-[#2f3336] h-[1px]'></div>
               </div>
               <div className='font-normal text-[15px]'>
                  <span>hoặc</span>
               </div>
               <div className='mx-1 justify-center basis-0 min-w-0 flex-1'>
                  <div className='bg-[#2f3336] h-[1px]'></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FormMain