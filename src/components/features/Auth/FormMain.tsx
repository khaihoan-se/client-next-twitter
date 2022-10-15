import Button from '@/components/shared/Button'
import React from 'react'
import MainLogin from './MainLogin'
interface FormMainProps {
   setOpenLogin?: any;
}
const FormMain: React.FC<FormMainProps> = ({ setOpenLogin }) => {
   return (
      <div>
         <MainLogin />
         <div className='mt-10'>
            <div className='text-tt-text-color text-[17px] min-w-0 max-w-[380px] font-bold mb-5'>
               <span>Đã có tài khoản?</span>
            </div>
            <Button className='border-tt-border-login-page border-[1px] text-tt-main-color hover:bg-[#1d9bf01a] font-bold text-[15px] out' onClick={() => setOpenLogin(true)}>
               <span>Đăng nhập</span>
            </Button>
         </div>
      </div>
   )
}

export default FormMain