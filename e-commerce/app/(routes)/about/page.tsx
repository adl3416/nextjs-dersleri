import React from 'react'
import { DataTable } from '../components/Datatable/data-table'
import { columns,Payment } from '../components/Datatable/columns'

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
  return (
    <div className='container mx-auto py-10 border mt-10 rounded-xl dark:border-slate-600'>
    <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default AboutPage
