import React from 'react'

interface OtherPagesProps{
    params:{
        otherpages:string[];
    }
}

const OtherPages = ({params}:OtherPagesProps) => {
  return (
    <div>OtherPages {params.otherpages}</div>   //http://localhost:3000/denee buradan gözüken : OtherPages denee
  )
}

export default OtherPages