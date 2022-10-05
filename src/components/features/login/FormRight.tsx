import Logo from '@/components/shared/Logo'
import React from 'react'

const FormRight = () => {
   return (
      <div className='min-w-[45vw] justify-center p-4 items-stretch flex-col bg-white z-50'>
         <div className='sm:min-w-[437px] max-w-[760px] w-full p-5'>
            <Logo className='h-14 pb-3 text-tt-logo-color' />
            <div className='leading-[84px] tracking-[-1.2px] text-[84px] font-bold break-words my-12 text-start text-black'>
               <span>Đang diễn ra ngay bây giờ</span>
            </div>
            <div className='text-black mb-8 leading-[36px] text-[31px] font-bold'>
               <span>Tham gia Twitter hôm nay.</span>
            </div>
         </div>
      </div>
   )
}

export default FormRight