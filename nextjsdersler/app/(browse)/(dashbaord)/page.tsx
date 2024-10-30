'use client'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";


import { AiFillAmazonSquare,AiFillAlipayCircle,AiFillDropboxSquare, AiFillBug  } from "react-icons/ai";


//const inter = Inter({subsets: ['latin']});

const pacifiko = Pacifico({ subsets: ["cyrillic"], weight: "400" });

export default function Home() {

  const router = useRouter()
  
  

  return (
    <>


    
      <Hero/>

      <button type="button" className='bg-red-500 p-4 text-white' onClick={() => router.push('/blog')}>
     Blog 
    </button>


    
      <div className="container mt-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <div className=" lg:col-span-3 border-2 items-center justify-center flex flex-col p-3"> 

              <div className="relative"> 
              < AiFillAlipayCircle  className="text-6xl"/>
            <div className="z-50 absolute right-1 -top-2 bg-red-700 rounded-full px-2 text-white">2</div>
            <h2> Home1 </h2>

              </div>

            
            </div>

            <div className="border-2 items-center justify-center flex flex-col p-3"> 
            <AiFillAmazonSquare  className="text-6xl"/>
            <h2> Home2 </h2>
            </div>

            <div className="border-2 items-center justify-center flex flex-col"> 
            <AiFillBug  className="text-6xl"/>
            <h2> Home3 </h2>
            </div>

            <div className="border-2 items-center justify-center flex flex-col"> 
            <AiFillDropboxSquare className="text-6xl"/>
            <h2> Home4 </h2>
            </div>

          
        </div>


      </div>

    
    </>
  );
}

{
  /* 

 -margin: m  de disa dogru bosluk verir.
 -P: ile Hertataftan ice dogru bosluk  erilir,px ile  Sag ve sol dan ice bosluk, py ile  Alt ve üstten ice dogru  bosluk verilir
 -hidden:görünmez yapar
 -line-clamp-3 : uzun yazilari ...koyarak kisaltir
 -text-center : yazi ortalama, text-right: saga kaydirir
 -underline  alti cizili yazi
 -uppercase: butun yaziyi buyuk yapma
 - mx-auto : Hizalama
 -flex justify-between:  yazin biri en saga biri en sola bosluk birakarak hizalamak
 -items-center yukaridan ortala
 -flex-col  : alt alta siralamak
 -  <div className="hidden sm:block">  sm de burasi gözukmeyecek yani 0-640 px arasi gozukmez
 - md:text-xl lg:text-2xl xl:text-3xl:   md ekranda yazi xl olsun, ekran xl iken yazi 3xl olsun
 -mr-3 : saga bosluk
 -space-x-5 : yatayda aralarinda 5 bosluk birak
 - hover:text-black : maus ile uzerine geline siyah olur
 - active:text-black
 - group-hover:text-black : hep beraber hover olur
 - focus:ring-8 ring-blue-600 : mesela inputu icine tiklayinca etrafini mavi efekt yapiyor
 -h-44 w-full object-cover" : ekran buyutukce resimde buyur
  -<img src="./img.jpg" className="h-44 md:h-96 lg:h-[500px] w-full object-cover"/>  resim md ekranda 96, lg ekranda 500px olsun
  - opacity-50 hover:opacity-90 transition duration-1000  : önce resim flu, maus ile uzerine gelince opacity-90 a kadar netlesir duration ile soft bir gecis yapar.
  - blur-2xl : buzlandirma
  - blur-sm hover:blur-none : resmi buzlandir ustune gelince buzu kaldir 
  -hover:brightness-50 resmin ustune gelince siyahlandir
  - gap-4 : grid aralarina bosluk
  -gap-y-4 :dikeyde aralarina bosluk
  -grid grid-cols-2 :  bi satirda 2 tane yanyana -4 yaprsak eger 4 tane div yanyana olur
  -grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 :  mobil ekranda 1 satirda 1 tane gözukcek,md ekranda 2,lg ekranda 4 gözukcek
  -col-span-2 : bu rasi 2 lik yer kaplar
  -z-50 absolute : arkaya atar konumu nekadr yuksekse okar yuksekte olsun.
  
  
  
  */
}
