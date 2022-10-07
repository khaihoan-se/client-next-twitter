import BaseButton from '@/components/shared/BaseButton'
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
            <div className='text-black text-[17px] min-w-0 max-w-[380px] font-bold mb-5'>
               <span>Đã có tài khoản?</span>
            </div>
            <BaseButton className='text-tt-main-color font-bold text-[15px]' onClick={() => setOpenLogin(true)}>
               <span>Đăng nhập</span>
            </BaseButton>
         </div>
      </div>
   )
}

export default FormMain