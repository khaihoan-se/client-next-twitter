import classNames from 'classnames';
import React, { ReactNode } from 'react'

interface BaseButtonProps {
   children: ReactNode;
   className?: string;
   onClick?: any
}
const BaseButton: React.FC<BaseButtonProps> = ({ children, className, onClick }) => {
   return (
      <div className={classNames(
         'md:w-[300px] w-full max-w-[380px] h-[40px] mb-3 mr-3 flex-1 flex items-center justify-center border-[1px] border-[#dadce0] rounded-[50px] cursor-pointer outline-none',
         className
      )} onClick={onClick}>
         {children}
      </div>
   )
}

export default BaseButton