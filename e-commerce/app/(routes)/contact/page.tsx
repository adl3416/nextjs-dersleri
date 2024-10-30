import React from 'react'
import AcordionExample from '../components/AcordionExample'
import AlertDialogExmple from '../components/AlertDialogExmple'

const ContactPage = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex flex-row items-center justify-center'>
          <div className='w-full md:w-1/2'>
         <AlertDialogExmple />
          </div>

          <div className='w-full md:w-1/2'>
         <AcordionExample/>
          </div>

        </div>
    
    </div>
  )
}

export default ContactPage