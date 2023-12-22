import React from 'react'

const CardBlog = ({blog}) => {
  return (
    <div className='h-full w-[400px] m-2 flex-shrink-0 '>
      <div className='rounded-3xl overflow-hidden mb-4 relative h-[250px]'>
        <img src={`/imgs/carrousel${blog.id}.jpg`} className='h-36 rounded-full'/>
       
      </div>
    </div>
  )
}

export default CardBlog