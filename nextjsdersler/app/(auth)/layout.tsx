import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'


interface AuthLayoutProps{
    children:React.ReactNode
}

const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <div>

        <Header/>
        <div className='min-h-screen'>
        {children}
        </div>
       
        <Footer/>
      
    </div>
  )
}

export default AuthLayout
