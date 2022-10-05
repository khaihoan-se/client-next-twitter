import React from 'react'
import Logo from '../shared/Logo'
import Link from 'next/link'
import NavMenu from '../shared/NavMenu'
import TweetButton from '@/components/icons/TweetButton'

const Header = () => {
   const isLogged = true
   return (
      <header className='bg-tt-bg-color grow items-end flex justify-end z-10'>
         <div className='xl:w-[275px] sm:w-[88px] w-[68px]'>
            <div className='h-full top-0 fixed'>
               <div className='justify-between h-full xl:w-[275px] sm:w-[88px] w-[68px] sm:px-[12px] px-[4px] flex flex-col xl:items-start items-center overflow-auto'>
                  {/* Top */}
                  <div className='items-start w-full'>
                     {/* Logo */}
                     <div className='py-1 max-w-full items-stretch'>
                        <h1 className='min-w-[32px] items-stretch cursor-pointer flex'>
                           <Link href='/'>
                              <a className='min-w-[52px] min-h-[52px] cursor-pointer flex items-center justify-center hover:bg-tt-hover-maincl-color rounded-full font-bold text-[15px]'>
                                 <Logo className='h-8 w-8 text-tt-logo-color' />
                              </a>
                           </Link>
                        </h1>
                     </div>
                     {/* Menu */}
                     <div className='w-full'>
                        <NavMenu isLogged={isLogged} username='genshinimpact.vi' />
                     </div>
                     {/* Button TweetButton */}
                     {isLogged && (
                        <div className='xl:w-[90%] w-[80%] my-[4px] mt-2'>
                           <div className='bg-tt-main-color hover--button--color min-w-[52px] min-h-[52px] cursor-pointer p-0 rounded-full flex items-center justify-center text-[17px] text-white font-bold'>
                              <span className='xl:block hidden'>Tweet</span>
                              <TweetButton className='w-[24px] h-[24px] text-white xl:hidden block' />
                           </div>
                        </div>
                     )}
                  </div>
                  {/* Buttom */}
                  {/* {isLogged && (
                     <div className={classNames(
                        'my-[12px] flex items-center sm:justify-between justify-center sm:p-[12px] p-0 rounded-full w-full relative',
                        !showLogout && 'hover:bg-tt-hover-header-color cursor-pointer'
                     )}
                        onClick={handleShowLogout}
                     >
                        <div>
                           <CardUser name={user.fullname} email={user.username} url={user.avatar} isHidden={true} />
                        </div>
                        <div className='xl:block hidden'>
                           <BiDotsHorizontalRounded className='text-[20px]' />
                        </div>
                        {showLogout && (
                           <>
                              <div className='fixed inset-0 w-full h-full bg-transparent z-50'></div>
                              <UserLogout user={user} />
                           </>
                        )}
                     </div>
                  )} */}
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header