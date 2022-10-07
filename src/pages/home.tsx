import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const HomePage: NextPage = () => {
   return (
      <React.Fragment>
         Home Page Next.js <span className='text-tt-main-color'><Link href='/'>Login!</Link></span>
      </React.Fragment>
   )
}

export default HomePage