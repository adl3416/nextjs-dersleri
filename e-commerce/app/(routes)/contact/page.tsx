import React from 'react'
import AcordionExample from '../components/AcordionExample'

const ContactPage = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex flex-row items-center justify-center'>
          <div className='w-full md:w-1/2'>
          Part 1
          </div>

          <div className='w-full md:w-1/2'>
         <AcordionExample/>
          </div>

        </div>
    
    </div>
  )
}

export default ContactPage