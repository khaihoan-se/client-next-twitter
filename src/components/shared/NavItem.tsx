import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

interface NavItemProps {
    title?: string;
    Icon?: any;
    path: string;
    IconActive?: any;
    username?: string
}
const NavItem = ({ title, Icon, path, IconActive, username }: NavItemProps) => {
    const router = useRouter()    
    const isActive = (href: string) => {
        if(router.pathname === href) return true
    }
    
    return path === '' ? (
        <a className='flex items-center grow w-full cursor-pointer'>
            <div className='flex items-center p-[12px] hover:bg-tt-hover-header-color rounded-full'>
                <div>
                    {isActive(title === 'Profile' ? '/[userID]' : path) ? <IconActive className='w-[1.75rem] h-[1.75rem]' /> : <Icon className='w-[1.75rem] h-[1.75rem]' />}
                </div>
                <div className={classNames(
                    'mr-[16px] ml-[20px] text-[20px] text-tt-text-color xl:block hidden',
                    isActive(title === 'Profile' ? '/[userID]' : path) && 'font-bold'
                )}>
                    <span>{title}</span>
                </div>
            </div>
        </a>
    ) : (
        <Link href={path === '/[userID]/lists' ? `/${username}/lists` : path}>
            <a className='flex items-center grow w-full'>
                <div className='flex items-center p-[12px] hover:bg-tt-hover-header-color rounded-full'>
                    <div>
                        {isActive(title === 'Profile' ? '/[userID]' : path) ? <IconActive className='w-[1.75rem] h-[1.75rem]' /> : <Icon className='w-[1.75rem] h-[1.75rem]' />}
                    </div>
                    <div className={classNames(
                        'mr-[16px] ml-[20px] text-[20px] text-tt-text-color xl:block hidden',
                        isActive(title === 'Profile' ? '/[userID]' : path) && 'font-bold'
                    )}>
                        <span>{title}</span>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default React.memo(NavItem)