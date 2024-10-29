'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {

  const router =useRouter();

  const handleclick=()=>{
    router.push("/")
  }

  return (
    <div className='text-sm text-center flex flex-col p-4'>

      <div>
        <Button variant='link' onClick={handleclick}> All righ  Reserverd ECommerce website</Button> {/*  yada ()=> router.push("/") kullabiliriz */}
      </div>


      <div>
          <Link href={`https://react-weather-adl.vercel.app/`} target='_blank'> Copyright @ AKar  </Link> 
      </div>

    </div>
  )
}

export default Footer