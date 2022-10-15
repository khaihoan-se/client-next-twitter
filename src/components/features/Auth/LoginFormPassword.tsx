import React from 'react';
import Input from '@/components/shared/Input'
import BaseButton from '@/components/shared/BaseButton'

const LoginFormPassword = () => {
   return (
      <div className='max-w-[600px] w-full mx-auto'>
         <div className='m-auto px-20 mt-3'>
            <div className='pb-5'>
               <h1 className='text-[#0f1419] leading-9 text-[31px] font-bold'><span>Nhập mật khẩu của bạn</span></h1>
            </div>
            <Input 
               label='Số điện thoại, email hoặc tên người dùng' 
               type='email'
               name='email'
            />
            <BaseButton 
               className='bg-black text-white text-[15px] font-bold my-3'
            >
               Tiếp theo
            </BaseButton>
            <BaseButton 
               className='bg-white text-black text-[15px] font-bold my-3 border-[1px] border-[#cfd9de]'
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

export default LoginFormPassword;
