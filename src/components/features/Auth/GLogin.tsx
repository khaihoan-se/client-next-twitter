import GoogleLoginIcon from '@/components/icons/GoogleLoginIcon'
import BaseButton from '@/components/shared/BaseButton'
import React from 'react'

const GLogin = () => {
   return (
      <BaseButton className='font-normal text-[#3c4043]'>
         <GoogleLoginIcon className='w-4 h-4 mr-2' />
         <span>Đăng ký bằng Google</span>
      </BaseButton>
   )
}

export default GLogin