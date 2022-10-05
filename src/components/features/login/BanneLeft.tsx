import React from 'react'
import Logo from '@/components/shared/Logo'
import Image from 'next/image'

const BanneLeft = () => {
   return (
      <div className='lg:flex-1 flex-initial bg-tt-logo-color flex items-center justify-center lg:h-auto h-[250px] relative'>
         <Logo className='text-white max-h-[380px] lg:h-1/2 h-full justify-center p-8 z-50' />
         <Image src='/img/benner_login_242000.png' layout='fill' objectFit='cover' className='w-full h-full z-0'  />
      </div>
   )
}

export default BanneLeft