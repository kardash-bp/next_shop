import React, { PropsWithChildren, ReactNode } from 'react'
import s from './layout.module.css'
const Layout = ({ children }: PropsWithChildren): ReactNode => {
  return (
    <div className='h-full mx-auto max-w-7xl text-primary bg-primary'>
      {children}
    </div>
  )
}

export default Layout
