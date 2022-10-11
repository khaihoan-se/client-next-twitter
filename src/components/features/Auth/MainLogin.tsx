import BaseButton from '@/components/shared/BaseButton'
import Link from 'next/link'
import React from 'react'
import ButtonLoginApple from './ButtonLoginApple'
import ButtonLoginGoogle from './ButtonLoginGoogle'
import DevOr from './DevOr'

const MainLogin = () => {
   return (
      <React.Fragment>
         <ButtonLoginGoogle />
         <ButtonLoginApple />
         <DevOr />
         
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
      </React.Fragment>
   )
}

export default MainLogin