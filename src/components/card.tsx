"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Card = (props : any) => {

    const router = useRouter();
  return (
    <div className='border-1 shadow-md rounded-md bg-white cursor-pointer' style={{width : '350px'}} onClick={() => router.push('products/' + props.id)}>
        <img className='rounded-t-md' style={{height : '200px', width: '100%'}} src={props.thumbnail} />

        <div className='p-4'>
            <h3 className='mb-4 text-lg font-bold text-black'>{props.title}</h3>

            <p className='text-black'>{props.description}</p>
        </div>
        
    </div>
  )
}

export default Card