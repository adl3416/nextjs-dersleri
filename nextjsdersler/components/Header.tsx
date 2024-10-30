'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdDarkMode } from "react-icons/md";

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {

    if(darkMode){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  
  }, [darkMode]);

  return (
    <div>
            <div className="items-center text-center bg-white dark:bg-black">
                <a href="" className=" font-semibold text-sm text-black hover:text-red-700
                dark:text-white  dark:hover:text-red-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias molestias cum delectus dolores expedita!</a>
      </div>


      <header className="bg-myblue p-4 shadow-2xl ">
        <div className="container mx-auto flex  justify-between items-center">
          <div className="text-white  text-lg md:text-xl lg:text-3xl xl:text-2xl  font-semibold hover:text-gray-200">Logo</div>

         <div className="hidden md:block md:w-1/2">
          <input type="text" className="w-full focus:ring-4 ring-blue-600 " />
         </div>

          <div className=" flex text-white  text-lg font-semibold gap-4">

            <div> Login </div> 
            
            <button onClick={()=> setDarkMode(!darkMode)}>  {/* tiklandiginda darkMod degil olarak isaretle */}
             <div> dark <MdDarkMode /></div>
           </button>

          </div>
        </div>
      </header>

      <div className="flex items-center justify-center p-3 space-x-8 bg-myprimary  border-b-2 border-b-blue-800">
          <Link href="/" className="text-white  hover:text-black"> Anasayfa</Link>
          <Link href="/about" className="text-white  hover:text-black"> About</Link>
          <Link href="/blog" className="text-white  hover:text-black"> Blog</Link>
          <Link href="/contact" className="text-white  hover:text-black"> Contact</Link>
        
      </div>

    </div>
  )
}

export default Header
