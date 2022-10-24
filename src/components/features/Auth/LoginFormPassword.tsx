import React from 'react';
import Input from '@/components/shared/Input'
import BaseButton from '@/components/shared/BaseButton'

interface LoginFormPasswordType {
   handleChangeUser: () => void;
   handleLogin: any;
   email: string
}
const LoginFormPassword = ({ handleChangeUser, handleLogin, email }: LoginFormPasswordType) => {
   return (
      <div className='max-w-[600px] w-full mx-auto'>
         <div className='m-auto px-20 mt-3 flex flex-col justify-between'>
            <div>
               <div className='pb-5'>
                  <h1 className='text-[#0f1419] leading-9 text-[31px] font-bold'><span>Nhập mật khẩu của bạn</span></h1>
               </div>
               <div className='bg-[#eff3f4] p-2 rounded mb-2'>
                  <div className='leading-4 text-[13px] font-normal text-[#536471]'>
                     <span>Email</span>
                  </div>
                  <div className='leading-4 text-[17px] font-normal text-[#536471] mt-3'>
                     <span>{email}</span>
                  </div>
               </div>
               <Input 
                  label='Mật khẩu' 
                  type='password'
                  name='password'
                  onChange={handleChangeUser}
               />
            </div>

            <div>
                  <BaseButton 
                     className='bg-white text-black text-[15px] font-bold my-3 border-[1px] border-[#cfd9de] min-h-[52px] min-w-[36px] w-full px-4'
                     onClick={handleLogin}
                  >
                     Quên mật khẩu?
                  </BaseButton>
                  <div className='text-[#536471] mt-4 font-normal text-[15px] leading-5'>
                     <span>Không có tài khoản?</span>
                     <span className='text-tt-main-color hover:underline ml-1 cursor-pointer'>Đăng ký</span>
                  </div>
            </div>
         </div>
      </div>
   )
}

export default LoginFormPassword;
