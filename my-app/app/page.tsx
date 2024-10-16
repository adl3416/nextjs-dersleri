import { Pacifico } from "next/font/google";
import Image from "next/image";


//const inter = Inter({subsets: ['latin']});

const pacifiko=Pacifico({subsets: ["cyrillic"],weight:"400"});



export default function Home() {
  return (
  <>
 
  <div className="p-80 bg-mysecond border-8 text-[26px]   border-myprimary "  >
  P ile Hertataftan ice dogru bosluk 

    <h2 className={`text-amber-100 text-2xl ${pacifiko.className}`}>  Text i Font ile yazdirma</h2>
    <h2 className={pacifiko.className}>Font Deneme</h2>
    <h2 className="text-white font-thin"> Kalinlik Deneme</h2>
   
  </div>
  </>
  );
}


 {/* 

 -margin: m  de disa dogru bosluk verir.
 -P: ile Hertataftan ice dogru bosluk  erilir,px ile  Sag ve sol dan ice bosluk, py ile  Alt ve üstten ice dogru  bosluk verilir
 -hidden:görünmez yapar
  
  
  
  
  
  */}