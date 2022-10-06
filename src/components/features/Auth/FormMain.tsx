import BaseButton from '@/components/shared/BaseButton'
import Link from 'next/link'
import React from 'react'
import ALogin from './ALogin'
import GLogin from './GLogin'

const FormMain = () => {
   return (
      <div>
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
         <BaseButton className='bg-tt-main-color text-white font-bold px-6 text-[14px] flex items-center justify-center'>
            <span className='max-w-full text-ellipsis whitespace-nowrap overflow-hidden'>Đăng ký bằng số điện thoại hoặc email</span>
         </BaseButton>
         <div className='w-[300px] max-w-[380px] text-[11px] text-[#536471] leading-3 mb-5'>
            <span>
               Khi đăng ký, bạn đã đồng ý với 
               <span className='text-tt-main-color hover:underline'><Link href='/'><a>Điều khoản Dịch vụ</a></Link></span> và 
               <span className='text-tt-main-color hover:underline'><Link href='/'><a>Chính sách Quyền riêng tư</a></Link></span>, gồm cả 
               <span className='text-tt-main-color hover:underline'><Link href='/'><a>Sử dụng Cookie</a></Link></span>.
            </span>
         </div>
         <div className='mt-10'>
            <div className='text-black text-[17px] min-w-0 max-w-[380px] font-bold mb-5'>
               <span>Đã có tài khoản?</span>
            </div>
            <BaseButton className='text-tt-main-color font-bold text-[15px]'>
               <span>Đăng nhập</span>
            </BaseButton>
         </div>
      </div>
   )
}

export default FormMain