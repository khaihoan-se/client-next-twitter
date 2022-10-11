import React from 'react'

const DevOr: React.FC = () => {
    return (
        <div className='md:w-[300px] w-full max-w-[380px] my-1'>
            <div className='flex-row mx-[-4px] my-[4px] flex items-center'>
                <div className='mx-1 justify-center basis-0 min-w-0 flex-1'>
                    <div className='bg-[#2f3336] h-[1px]'></div>
                </div>
                <div className='font-normal text-[15px]'>
                    <span>hoặc</span>
                </div>
                <div className='mx-1 justify-center basis-0 min-w-0 flex-1'>
                    <div className='bg-[#2f3336] h-[1px]'></div>
                </div>
            </div>
        </div>
    )
}

export default DevOr