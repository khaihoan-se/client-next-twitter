import classNames from 'classnames';
import React, { ReactNode } from 'react'

interface ButtonProps {
   children: ReactNode;
   className?: string;
   onClick?: any
}
const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
   return (
      <div className={classNames(
         'md:w-[300px] w-full max-w-[380px] h-[40px] mb-3 mr-3 flex-1 flex items-center justify-center rounded-[50px] cursor-pointer outline-none',
         className
      )} onClick={onClick}>
         {children}
      </div>
   )
}

export default Button