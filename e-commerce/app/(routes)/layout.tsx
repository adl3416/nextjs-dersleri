import React from 'react'
import Header from './components/Menu/Header'
import Footer from './components/Menu/Footer'

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

        <Footer/>
    </>
  )
}

export default RoutesLayout