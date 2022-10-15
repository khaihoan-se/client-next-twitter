import AppleLoginIcon from '@/components/icons/AppleLoginIcon'
import React from 'react'
import Button from '@/components/shared/Button'

const ButtonLoginApple = () => {
   return (
      <Button className='font-bold text-[#3c4043] bg-white border-[1px] border-tt-border-login-page'>
         <AppleLoginIcon className='w-4 h-4 mr-2 text-black' />
         <span>Đăng ký bằng Apple</span>
      </Button>
   )
}

export default ButtonLoginApple