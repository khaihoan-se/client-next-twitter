import GoogleLoginIcon from '@/components/icons/GoogleLoginIcon'
import BaseButton from '@/components/shared/BaseButton'
import React from 'react'

const ButtonLoginGoogle = () => {
   return (
      <BaseButton className='text-[#3c4043] font-medium'>
         <GoogleLoginIcon className='w-4 h-4 mr-2' />
         <span>Đăng ký bằng Google</span>
      </BaseButton>
   )
}

export default ButtonLoginGoogle