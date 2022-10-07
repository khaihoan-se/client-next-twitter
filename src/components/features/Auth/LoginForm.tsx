import React from 'react'
import GLogin from './GLogin'
import ALogin from './ALogin'

const LoginForm = () => {
   return (
      <div className='max-w-[600px] w-full mx-auto'>
         <div className='py-12 min-w-[364px] max-w-[364px] px-8 m-auto'>
            <div className='pb-5'>
               <h1 className='text-[#0f1419] leading-9 text-[31px] font-bold'><span>Đăng nhập vào Twitter</span></h1>
            </div>
            <GLogin />
            <ALogin />
            <div className='md:w-[300px] w-full max-w-[380px] my-1'>
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
      </div>
   )
}

export default LoginForm