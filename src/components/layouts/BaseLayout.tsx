import React, { ReactNode } from 'react'
import Header from '@/components/partials/Header'
import Trends from '@/components/partials/Trends'
import { useRouter } from 'next/router'
import classNames from 'classnames'

interface BaseLayoutProps {
   children: ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
   /* useRouter */
   const router = useRouter()
   return (
      <main className='app dark blue'>
         <div className={classNames(
            'flex min-h-screen mx-auto',
            router.pathname === '/' ? '' : 'container'
         )}>
            {router.pathname === '/' ? (<>{children}</>) : (
               <>
                  <Header />
                  <div className='app-content items-start shrink grow flex basis-auto flex-col'>
                     <div className='lg:w-[990px] w-full shrink grow flex basis-auto flex-col'>
                        <div className='flex grow'>
                              <div className='lg:max-w-[600px] w-full min-h-[100vh] bg-tt-bg-color mr-0 ml-0 border-l-[1px] border-r-[1px] border-tt-border-color'>
                                 {children}
                              </div>
                              <div className='w-[350px] mr-[10px] bg-tt-bg-color lg:block hidden'>
                                 <Trends />
                              </div>
                        </div>
                     </div>
                  </div>
               </>
            )}
         </div>
      </main>
   )
}

export default BaseLayout