import GoogleLoginIcon from '@/components/icons/GoogleLoginIcon'
import Button from '@/components/shared/Button'
import React from 'react'

const ButtonLoginGoogle = () => {
   return (
      <Button className='text-[#3c4043] bg-white font-medium border-[1px] border-tt-border-login-page'>
         <GoogleLoginIcon className='w-4 h-4 mr-2' />
         <span>Đăng ký bằng Google</span>
      </Button>
   )
}

export default ButtonLoginGoogle