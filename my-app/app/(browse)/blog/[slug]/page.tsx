import React from 'react'

interface BlogDetailsProps{
    params:{
        slug:string;
    }
}

const BlogDetails = ( {params}:BlogDetailsProps) => {
  return (
    <div>BlogDetails {params.slug}</div> //  http://localhost:3000/blog/deneme  buradaki deneme yazisni ekranda div in icindeki BlogDetails ile birlikte görürüz
  )
}

export default BlogDetails