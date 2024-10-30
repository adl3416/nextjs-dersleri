'use client'

import { Heart, Search, ShoppingBagIcon, UserIcon } from "lucide-react";
import React, { useState } from "react";
import { Pacifico } from "next/font/google";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ModeToggle";
import NavMenu from "./NavMenu";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import CartMenu from "./Cart";
import Link from "next/link";
import { useRouter } from "next/navigation";

const pacifiko = Pacifico({ subsets: ["cyrillic"], weight: "400" });



const Header = () => {

    const router=useRouter(); // anasayfaya geri dönmek icin yada baskayere yönlendirmek icin kullanilir

   const [query, setQuery] = useState('');  //setQuery deki degisiklik ile query i degistrimis olucaz
   //console.log(query) searc yazilan lari yakaliyoruz
   const handleSearch=()=>{    //yukarida searchde yazdigim seyi URI formatina cevircez. Yoksa bisey yazildiginda program patlar
       if(query.trim()){        //   eger query bos degilse    yönlenditme islemi yapicaz -> router.push('/search?query')
            router.push(`/search?query=${encodeURIComponent(query)}`)   // istedigimizyere yönlendirip icerdeki datayi URI ceviriyo.bosluk tire vs varsa degistricek
    }

    }                                     
 

  return (
    <div className="mx-auto bg-white dark:bg-mycolor-100 shadow-md">
      <div className="container flex flex-row items-center justify-between p-5">
        <div>
          <h2 className={`${pacifiko.className} text-xl`}>E Commerce</h2>
        </div>
        <div className="hidden md:flex relative md:min-w-96 lg:w-1/2">
          <Input className="w-full border-2" onChange={(e)=>setQuery(e.target.value)} /> {/* onChange->  senin degerin degistigi zaman bunu e  ye atayacaksin yani setQuery */}
          <Button onClick={handleSearch} variant="link" className="absolute right-1">
            <Search />
          </Button>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <ModeToggle />

          <Link href={"/fav"}> 
             <Heart />
          </Link>

          <CartMenu />

          <Link href={"/login"}> 
            <UserIcon />
          </Link>
        
          <MobileMenu />
        </div>
      </div>

      <NavMenu />
    </div>
  );
};

export default Header;
