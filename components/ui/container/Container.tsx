import React, { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
  return <div className='h-full mx-auto px-6'>{children}</div>
}

export default Container
