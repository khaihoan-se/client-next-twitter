import GoogleLoginIcon from '@/components/icons/GoogleLoginIcon'
import React from 'react'

const GLogin = () => {
   return (
      <div className='w-[300px] max-w-[380px] h-[40px] mb-3 mr-3 flex-1 flex items-center justify-center border-[1px] border-[#dadce0] rounded-[50px] cursor-pointer text-[#3c4043]'>
         <GoogleLoginIcon className='w-4 h-4 mr-2' />
         <span>Đăng ký bằng Google</span>
      </div>
   )
}

export default GLogin