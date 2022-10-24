import GoogleLoginIcon from '@/components/icons/GoogleLoginIcon'
import BaseButton from '@/components/shared/BaseButton'
import Button from '@/components/shared/Button'
import React from 'react'

const ButtonLoginGoogle = () => {
   return (
      <BaseButton className='md:w-[300px] w-full max-w-[380px] h-[40px] mb-3 mr-3 flex-1 flex items-center justify-center text-[#3c4043] bg-white text-[14px]'>
         <GoogleLoginIcon className='w-4 h-4 mr-2' />
         <span>Sign up with Google</span>
      </BaseButton>
   )
}

export default ButtonLoginGoogle