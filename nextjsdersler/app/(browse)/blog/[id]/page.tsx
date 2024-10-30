import { Blogs } from '@/constans';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface BlogDetailPage{
    params:{
        id:string

    }



}


const BlogDetailPage = ({params}:BlogDetailPage) => {

  

  const {id} =params; //id diye bisey ariyacaksin paramsin icinde
  //console.log(params.id)
  const blog=Blogs.find((blog)=>blog.id===parseInt(id as string)); //Blogs icinde bir id var, sen bu id ile parseInt(id as string)) karsilastir ama stringde olabilir. Sonra int cevir 
  //console.log(blog)


  if(!blog) {
    return(
        <div className='container mx-auto mt-8'>
          <h2 className='text-4xl font-semibold'>Not Found </h2>

          <Link href="/blog">
                  <div className='mt-6 inline-block w-full px-4 py-2 bg-red-600 text-white text-center rounded-lg hover:bg-red-700 duration-700 transition'>
                    Back to Blog
                  </div>
          </Link>
       
       </div>)
  }


  return (
    
    <div className='container mx-auto mt-8'>
      <div  className='max-w-3xl mx-auto'>
      <Image
                alt={blog.title}
                src={blog.image}
                width={1024}
                height={768}
                className='w-full h-56 object-cover transition-transform transform group-hover:scale-105 duration-700'
                />

<h2 className='text-2xl mt-4 font-bold mb-2 group-hover:text-red-600 duration-700 transition '>{blog.title}</h2>
           <p className='mb-5'>
                {blog.description}
            </p>

            <Link href="/blog">
                    <div className='mt-6 inline-block w-full px-4 py-2 bg-red-600 text-white text-center
            rounded-lg hover:bg-red-700 duration-700 transition'>Back to Blog</div>
                </Link>

      </div>
      
         

                

    </div>
  )
}

export default BlogDetailPage
