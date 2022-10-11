import AppleLoginIcon from '@/components/icons/AppleLoginIcon'
import React from 'react'
import BaseButton from '@/components/shared/BaseButton'

const ButtonLoginApple = () => {
   return (
      <BaseButton className='font-bold text-[#3c4043]'>
         <AppleLoginIcon className='w-4 h-4 mr-2 text-black' />
         <span>Đăng ký bằng Apple</span>
      </BaseButton>
   )
}

export default ButtonLoginApple