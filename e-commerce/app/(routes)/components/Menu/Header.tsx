import { Heart, ShoppingBagIcon, UserIcon, } from 'lucide-react'
import React from 'react'
import { Pacifico } from "next/font/google";
import { Input } from '@/components/ui/input';
import { ModeToggle } from '@/components/ModeToggle';

const pacifiko = Pacifico({subsets:["cyrillic"], weight:"400"})


const Header = () => {
  return (
    <div className='mx-auto bg-white dark:bg-mycolor-100 shadow-md'>
        <div className='container flex flex-row items-center justify-between p-5'>
            <div>
                <h2 className={`${pacifiko.className} text-xl`}>E Commerce</h2>
            </div>
            <div className='hidden md:flex relative md:min-w-96 lg:w-1/2'>
                <Input className='w-full border-2'/>
            </div>
            <div className='flex flex-row items-center space-x-3'>
                <Heart/>
                <ShoppingBagIcon/>
                <UserIcon/>
                <ModeToggle/>
            </div>

        </div>
    </div>
  )
}

export default Header