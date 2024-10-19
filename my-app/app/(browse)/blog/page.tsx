'use client'
import { Blogs, BlogsType } from '@/constans';
import React, { useEffect, useState } from 'react'

const BlogPage = () => {

  const [blogs, setBlogs] = useState<BlogsType[]>([]);

  useEffect(()=>{ // sayfaya girildiginde, baslangista bunun icindekileri calistir.
    setBlogs(Blogs) //constans klasöru icindeki isim Blogs. Ve setBlogs a benim verdigim bilgiyi set et dedik
  },[]);

  return (
    <>

    <div className='container mx-auto mt-8'>
      <h2 className='text-2xl font-semibold text-center'> Tip 1 </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {blogs.map((blog,index)=>(
            <div key={index}>{blog.title}</div>
          ))}
      </div>
    </div>


    <div className='container mx-auto mt-8'>
      <h2 className='text-2xl font-semibold text-center'> Tip 2 </h2>
    </div>

    </>
  )
}

export default BlogPage