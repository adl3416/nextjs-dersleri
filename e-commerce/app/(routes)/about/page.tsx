import React from 'react'
import { DataTable } from '../components/Datatable/data-table'
import { columns,Payment } from '../components/Datatable/columns'
import { Metadata } from 'next'

export const metadata:Metadata={
  title:"About | Hakkımda ",
  description:"makara hakkımda",
  robots:{
    index:false,
    follow:false,
  },

}
 

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}


const AboutPage = async() => {
  const data = await getData()

  const jsonLd = {    // kaynak kodlardan bulanabilirligi artirmak icin yapilir ctr u kaynak kodlara bakilabilinir. return da scrip bu nedenle eklendi
    '@context': 'https://schema.org',
    '@type': 'Product',
    author: "makara",
    isPublished: true,
    tags: ["web development", "nextjs", "mobile development", "shopify development"]
  }


  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    
   
    <div className="container mx-auto py-10 border mt-10 rounded-xl dark:border-slate-600">
    <DataTable columns={columns} data={data} />
  </div>
  </>
  )
}

export default AboutPage
