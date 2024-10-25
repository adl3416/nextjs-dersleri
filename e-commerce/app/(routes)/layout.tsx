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
        {children}   {/* anasayfa page */}
        <Footer/>
    </>
  )
}

export default RoutesLayout