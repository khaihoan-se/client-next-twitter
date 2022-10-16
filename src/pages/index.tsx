import FormRight from '@/components/features/Auth/FormRight'
import { RULES } from '@/constants'
import { NextPage } from 'next'
import React, { useState } from 'react'
import Link from 'next/link'
import BaseModule from '@/components/shared/BaseModule'
import LoginFormEmail from '@/components/features/Auth/LoginFormEmail'
import CloseIcon from '@/components/icons/CloseIcon'
import Logo from '@/components/shared/Logo'
import { debounce } from '@/utils'
import LoginFormPassword from '@/components/features/Auth/LoginFormPassword'
import Image from 'next/image'

const initialState = { email: '', password: '' }

const LoginPage: NextPage = () => {
   const [ openLogin, setOpenLogin ] = useState<boolean>(false)
   const [ user, setUser ] = useState(initialState)
   const { email, password } = user

   const [ tab, setTab ] = useState<number>(1)

   const handleChangeUser = debounce(
      (event: React.ChangeEvent<HTMLInputElement>) =>
         setUser({...user, [event.target.name]:event.target.value }),
      500
   ) 
   
   return (
      <React.Fragment>
         <div className='flex-1'>
            <div className='lg:flex-row-reverse flex-col flex-auto flex relative lg:min-h-screen'>
               <FormRight setOpenLogin={setOpenLogin} />
               <div className='lg:flex-1 flex-initial bg-[#1d9bf0] flex items-center justify-center lg:h-auto h-[250px] relative'>
                  <Logo className='text-white max-h-[380px] lg:h-1/2 h-full justify-center p-8 z-50' />
                  <Image src='/img/benner_login_242000.png' layout='fill' objectFit='cover' className='w-full h-full z-0'  />
               </div>
            </div>
            <div>
               <nav className='flex-wrap justify-center flex-row py-3 px-4 items-stretch flex w-full text-tt-text-login'>
                  {
                     RULES.map((item: any, index: number) => (
                        <Link href={item.path} key={index}>
                           <a className='pr-4 leading-4 text-[13px] cursor-pointer font-normal my-1 hover:underline'><span>{item.name}</span></a>
                        </Link>
                     ))
                  }
                  <div className='pr-4 leading-4 text-[13px] font-normal my-1'>
                     <span>© 2022 Twitter, Inc.</span>
                  </div>
               </nav>
            </div>
            {/* {openLogin && (
               <BaseModule className='bg-tt-bg-color sm:min-h-[400px] min-h-screen sm:max-h-[90vh] max-h-[100vh] max-w-[80vw] sm:min-w-[600px] min-w-full h-[650px]'>
                  <div className='h-[53px] flex items-center justify-between w-full px-4 relative'>
                     <div className='cursor-pointer' onClick={() => setOpenLogin(false)}>
                        <CloseIcon className='w-[20px] h-[20px] text-[#0f1419]' />
                     </div>
                     <div className='absolute left-1/2 translate-x-[-50%] min-w-[32px] flex items-center justify-center'>
                        <Logo className='h-[2rem] text-tt-main-color' />
                     </div>
                     <div></div>
                  </div>
                  {
                     tab === 1 ? (<LoginFormEmail handleChangeUser={handleChangeUser} setTab={setTab} />) : (<LoginFormPassword />)
                  }
               </BaseModule>
            )} */}
         </div>
      </React.Fragment>
   )
}

export default LoginPage