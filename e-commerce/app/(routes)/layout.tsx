import React from 'react'
import Header from './components/Menu/Header'
import Footer from './components/Menu/Footer'
import { Toaster } from '@/components/ui/toaster'

interface RoutesLayoutProps{
    children: React.ReactNode 
}

const RoutesLayout = ({children}:RoutesLayoutProps) => {
  return (


    <>
        <Header/>

        <div className='min-h-screen'> 
        {children}   {/* anasayfa page */}
        </div>
        <Toaster/>

        <Footer/>
    </>
  )
}

export default RoutesLayout