import React from 'react'

interface AuthLayoutProps{
    children:React.ReactNode
}

const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <div className='flex flex-row items-center justify-center'>
        <div className='hidden lg:w-1/2 h-screen'>
        AuthLayout
        </div>
    </div>
  )
}

export default AuthLayout