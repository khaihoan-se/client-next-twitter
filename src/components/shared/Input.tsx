import React, { useRef } from 'react'


interface InputProps extends React.HTMLProps<HTMLInputElement> {
   label?: string;
   containerClassName?: string;
   containerInputClassName?: string;
   labelClassName?: string;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
   const { label, containerClassName, containerInputClassName, labelClassName } = props
   return (
      <div className='w-full px-0 py-3'>
         <div className='flex-row flex rounded border-[1px] border-[#cfd9de]'>
            <label htmlFor='input' className='grow shrink relative'>
               <div className='label--input h-full justify-between flex-row w-full absolute text-[#536471] pt-5 leading-4 text-[17px] font-normal px-2 max-w-full truncate'>
                  <span>{label}</span>
               </div>
               <input
                  id='input'
                  ref={ref} 
                  type='email' 
                  className='focus--input pt-3 pb-2 mt-4 shrink grow flex-row px-2 overflow-hidden flex relative text-left bg-transparent outline-none w-full border-none text-[#0f1419] leading-6 text-[17px] items-center font-normal'
               />
               {/* <div className='h-full justify-between flex-row w-full absolute'>
                  <div className='focus--label text-[#536471] pt-5 leading-4 text-[17px] font-normal px-2 max-w-full truncate h-full'>
                     <span>{label}</span>
                  </div>
               </div>
               <div className='pt-3 pb-2 mt-4 shrink grow flex-row px-2 overflow-hidden flex relative'>
                  <div className='text-[#0f1419] leading-6 text-[17px] items-center w-full font-normal flex'>
                     <input 
                        ref={ref} 
                        type='text' 
                        className='focus--input text-left bg-transparent outline-none w-full border-none'
                     />
                  </div>
               </div> */}
            </label>
         </div>
      </div>
   )
})

Input.displayName = "Input";

export default React.memo(Input);
