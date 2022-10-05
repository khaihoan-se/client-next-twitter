import BanneLeft from '@/components/features/Auth/BanneLeft'
import FormRight from '@/components/features/Auth/FormRight'
import { RULES } from '@/constants'
import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'

const LoginPage: NextPage = () => {
   return (
      <React.Fragment>
         <div className='flex-1'>
            <div className='lg:flex-row-reverse flex-col flex-auto flex relative lg:min-h-screen min-h-fit'>
               <FormRight />
               <BanneLeft />
            </div>
            <div>
               <nav className='flex-wrap justify-center flex-row py-3 px-4 items-stretch flex w-full'>
                  {
                     RULES.map((item: any, index: number) => (
                        <Link href={item.path} key={index}>
                           <a className='login--rules--text pr-4 leading-4 text-[13px] cursor-pointer font-normal my-1 hover:underline'><span>{item.name}</span></a>
                        </Link>
                     ))
                  }
                  <div className='login--rules--text pr-4 leading-4 text-[13px] font-normal my-1'>
                     <span>© 2022 Twitter, Inc.</span>
                  </div>
               </nav>
            </div>
         </div>
      </React.Fragment>
   )
}

export default LoginPage