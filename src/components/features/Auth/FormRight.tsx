import Logo from '@/components/shared/Logo'
import React from 'react'
import FormMain from './FormMain'
interface FormRightProps {
   setOpenLogin?: any;
}
const FormRight: React.FC<FormRightProps> = ({ setOpenLogin }) => {
   return (
      <div className='min-w-[45vw] justify-center p-4 items-stretch flex-col bg-white z-50'>
         <div className='sm:min-w-[437px] max-w-[760px] w-full p-5'>
            <Logo className='h-14 pb-3 text-tt-logo-color' />
            <div className='md:leading-[84px] leading-[64px] tracking-[-1.2px] md:text-[84px] text-[54px] font-bold break-words md:my-12 my-10 text-start text-black'>
               <span>Đang diễn ra ngay bây giờ</span>
            </div>
            <div className='text-black mb-8 leading-[36px] text-[31px] font-bold'>
               <span>Tham gia Twitter hôm nay.</span>
            </div>
            <FormMain setOpenLogin={setOpenLogin} />
         </div>
      </div>
   )
}

export default FormRight