import React, { useState } from 'react'
import ButtonLoginGoogle from './ButtonLoginGoogle'
import ButtonLoginApple from './ButtonLoginApple'
import Input from '@/components/shared/Input'
import DevOr from './DevOr'
import BaseButton from '@/components/shared/BaseButton'

interface LoginFormProps {
   handleChangeUser: () => void;
   handleCheckEmail: () => void;
}
const LoginFormEmail: React.FC<LoginFormProps> = ({ handleChangeUser, handleCheckEmail }) => {
   return (
      <div className='max-w-[600px] w-full mx-auto'>
         <div className='py-12 min-w-[364px] max-w-[364px] px-8 m-auto'>
            <div className='pb-5'>
               <h1 className='text-[#0f1419] leading-9 text-[31px] font-bold'><span>Đăng nhập vào Twitter</span></h1>
            </div>
            <ButtonLoginGoogle />
            <ButtonLoginApple />
            <DevOr />
            <Input 
               label='Số điện thoại, email hoặc tên người dùng' 
               type='email'
               name='email'
               onChange={handleChangeUser}
            />
            <BaseButton 
               className='bg-black text-white text-[15px] font-bold my-3 min-w-[36px] min-h-[36px] w-full px-4'
               onClick={handleCheckEmail}
            >
               Tiếp theo
            </BaseButton>
            <BaseButton 
               className='bg-white text-black text-[15px] font-bold my-3 border-[1px] border-[#cfd9de] min-w-[36px] min-h-[36px] w-full px-4 '
            >
               Quên mật khẩu?
            </BaseButton>
            <div className='text-[#536471] mt-10 font-normal text-[15px] leading-5'>
               <span>Không có tài khoản?</span>
               <span className='text-tt-main-color hover:underline ml-1 cursor-pointer'>Đăng ký</span>
            </div>
         </div>
      </div>
   )
}

export default React.memo(LoginFormEmail)