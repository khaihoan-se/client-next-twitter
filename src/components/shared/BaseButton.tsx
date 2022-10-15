import classNames from 'classnames';
import React from 'react'

interface BaseButtonProps extends Omit<React.BaseHTMLAttributes<HTMLButtonElement>, 'onClick'> {
   onClick?: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null
   ) => void;
   className?: string;
}

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
   const { onClick, className, children, ...rest } = props
   return (
      <button
         className={classNames(
            'outline-none min-w-[36px] min-h-[36px] w-full px-4 mx-auto rounded-full',
            className
         )}
         ref={ref}
         onClick={onClick}
         {...rest}
      >
         {children}
      </button>
   )
})

BaseButton.displayName = 'BaseButton'

export default BaseButton