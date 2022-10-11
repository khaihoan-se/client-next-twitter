import React, { useRef } from 'react'
import ButtonLoginGoogle from './ButtonLoginGoogle'
import ButtonLoginApple from './ButtonLoginApple'
import Input from '@/components/shared/Input'
import DevOr from './DevOr'

const LoginForm = () => {
   return (
      <div className='max-w-[600px] w-full mx-auto'>
         <div className='py-12 min-w-[364px] max-w-[364px] px-8 m-auto'>
            <div className='pb-5'>
               <h1 className='text-[#0f1419] leading-9 text-[31px] font-bold'><span>Đăng nhập vào Twitter</span></h1>
            </div>
            <ButtonLoginGoogle />
            <ButtonLoginApple />
            <DevOr />
            <Input label='Số điện thoại, email hoặc tên người dùng' />
         </div>
      </div>
   )
}

export default LoginForm