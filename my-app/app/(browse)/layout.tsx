import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'


interface BrowserLayout{
    children: React.ReactNode;

}

const BrowserLayout = ({children}:BrowserLayout) => {
  return (

    <div>
            <Header/>
            <div className='min-h-screen'>
                
            {children}                              {/*dashboard daki  home sayfasi */}
            </div>
            <Footer/>
   


    </div>


  )
}

export default BrowserLayout
