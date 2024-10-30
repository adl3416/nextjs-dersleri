'use client'

import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const SearchPage = () => {

        const searchParams = useSearchParams();  //sayfaya gelen degeri yakalaip tutmamiz gerekiyor.Biz önce searc he bir deger yaziyoruz.Onu yakalamak icin

                         
  return (
    <div>
     {searchParams.get("query")}                 {/*  yukarida, url de ne yaziyosa sayfaya getir */}
    </div>
  )
}

export default SearchPage
