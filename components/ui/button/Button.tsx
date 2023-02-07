import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
}
const Button = ({ children, ...rest }: BtnProps) => {
  return (
    <button type='button' {...rest}>
      {children}
    </button>
  )
}

export default Button
