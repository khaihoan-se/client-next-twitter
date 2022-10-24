import { RULES } from '@/constants'
import { GetStaticProps, NextPage } from 'next'
import React, { useState } from 'react'
import Link from 'next/link'
import BaseModule from '@/components/shared/BaseModule'
import LoginFormEmail from '@/components/features/Auth/LoginFormEmail'
import CloseIcon from '@/components/icons/CloseIcon'
import Logo from '@/components/shared/Logo'
import { debounce } from '@/utils'
import LoginFormPassword from '@/components/features/Auth/LoginFormPassword'
import Image from 'next/image'
import ButtonLoginGoogle from '@/components/features/Auth/ButtonLoginGoogle'
import ButtonLoginApple from '@/components/features/Auth/ButtonLoginApple'
import DevOr from '@/components/features/Auth/DevOr'
import Button from '@/components/shared/Button'
import AuthApi from '@/api/authApi'
import Notify from '@/components/shared/Notify'

const initialState = { email: '', password: '' }

const LoginPage: NextPage = () => {
   const [ openLogin, setOpenLogin ] = useState<boolean>(false)
   const [ tab, setTab ] = useState<boolean>(false)
   const [ notify, setNotify ] = useState<boolean>(false)

   const [ user, setUser ] = useState(initialState)
   const { email, password } = user

   const handleChangeUser = debounce(
      (event: React.ChangeEvent<HTMLInputElement>) =>
         setUser({...user, [event.target.name]:event.target.value }),
      500
   )

   const handleOpenModuleLogin = () => {
      document.body.style.overflowY = 'hidden'
      setOpenLogin(true)
   }

   const handleCloseModuleLogin = () => {
      document.body.style.overflowY = 'auto'
      setOpenLogin(false)
      setTab(false)
   }

   const handleCheckEmail = async () => {      
      const { checkemail }: any = await AuthApi.checkEmail({ email: email })
      if(checkemail) {
         setTab(true)
      } else {
         setNotify(true)
         setTimeout(() => {
            setNotify(false)
         }, 3000)
      }
   }

   const handleLogin = async (event: React.ChangeEvent) => {
      event.preventDefault()
      try {
         const res: any = await AuthApi.login(user)
         console.log(res);
         
      } catch (err: any) {
         console.log(err);
      }
   }
   console.log(user);
   
   return (
      <React.Fragment>
         <div className='flex-1 relative'>
            <div className='lg:flex-row-reverse flex-col flex-auto flex relative lg:min-h-screen'>
               {/* Form */}
               <div className='min-w-[45vw] justify-center p-4 items-stretch flex-col bg-tt-bg-color z-50'>
                  <div className='sm:min-w-[437px] max-w-[760px] w-full p-5'>
                     <Logo className='h-14 pb-3 text-tt-logo-color' />
                     <div className='md:leading-[84px] leading-[64px] tracking-[-1.2px] md:text-[84px] text-[54px] font-bold break-words md:my-12 my-10 text-start text-tt-text-color'>
                        <span>Đang diễn ra ngay bây giờ</span>
                     </div>
                     <div className='text-tt-text-color mb-8 leading-[36px] text-[31px] font-bold'>
                        <span>Tham gia Twitter hôm nay.</span>
                     </div>
                     <div>
                        <ButtonLoginGoogle />
                        <ButtonLoginApple />
                        <DevOr />
                        
                        <Button className='bg-tt-main-color text-white font-bold px-6 text-[14px] flex items-center justify-center'>
                           <span className='max-w-full text-ellipsis whitespace-nowrap overflow-hidden'>Đăng ký bằng số điện thoại hoặc email</span>
                        </Button>

                        <div className='w-[300px] max-w-[380px] text-[11px] text-tt-text-login leading-3 mb-5'>
                           <span>
                              Khi đăng ký, bạn đã đồng ý với 
                              <span className='text-tt-main-color hover:underline ml-1'><Link href='/'><a>Điều khoản Dịch vụ</a></Link></span> và 
                              <span className='text-tt-main-color hover:underline ml-1'><Link href='/'><a>Chính sách Quyền riêng tư</a></Link></span>, gồm cả 
                              <span className='text-tt-main-color hover:underline ml-1'><Link href='/'><a>Sử dụng Cookie</a></Link></span>.
                           </span>
                        </div>
                        
                        <div className='mt-10'>
                           <div className='text-tt-text-color text-[17px] min-w-0 max-w-[380px] font-bold mb-5'>
                              <span>Đã có tài khoản?</span>
                           </div>
                           <Button className='border-tt-border-login-page border-[1px] text-tt-main-color hover:bg-[#1d9bf01a] font-bold text-[15px] out' onClick={handleOpenModuleLogin}>
                              <span>Đăng nhập</span>
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Banner */}
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
            {openLogin && (
               <BaseModule className='bg-tt-bg-color sm:min-h-[400px] min-h-screen sm:max-h-[90vh] max-h-[100vh] max-w-[80vw] sm:min-w-[600px] min-w-full h-[650px]'>
                  <div className='h-[53px] flex items-center justify-between w-full px-4 relative'>
                     <div className='cursor-pointer' onClick={handleCloseModuleLogin}>
                        <CloseIcon className='w-[20px] h-[20px] text-[#0f1419]' />
                     </div>
                     <div className='absolute left-1/2 translate-x-[-50%] min-w-[32px] flex items-center justify-center'>
                        <Logo className='h-[2rem] text-tt-main-color' />
                     </div>
                     <div></div>
                  </div>
                  {
                     tab ? (<LoginFormPassword handleChangeUser={handleChangeUser} handleLogin={handleLogin} email={email} />) 
                     : (<LoginFormEmail handleChangeUser={handleChangeUser} handleCheckEmail={handleCheckEmail} />)
                  }
               </BaseModule>
            )}
            {notify && <Notify message='Rất tiếc, chúng tôi không thể tìm thấy tài khoản của bạn.' />}
         </div>
      </React.Fragment>
   )
}
export default LoginPage