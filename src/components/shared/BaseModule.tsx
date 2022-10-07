import classNames from 'classnames';
import React, { ReactNode } from 'react'

interface BaseModuleProps {
   className?: string;
   children: ReactNode
}

const BaseModule: React.FC<BaseModuleProps> = ({ className, children }) => {
   return (
      <div className='w-[100vw] items-center justify-center h-full flex flex-row fixed top-0 z-50'>
         <div className='bg__module inset-0 fixed z-50'></div>
         <div className={classNames(
            'z-50 overflow-hidden sm:rounded-2xl rounded-none',
            className
         )}>{children}</div>
      </div>
   )
}

export default BaseModule