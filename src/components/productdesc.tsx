'use client'
import React, { useState } from 'react'

const Productdesc = (props : any) => {

    const [activeimage , setactiveimage] = useState(props.data.images[0]);
    
  return (
    <div className="p-6 px-12 grid grid-cols-2 gap-7">

        <div>
            <div>
                <img style={{height: '400px'}} src={activeimage} className="w-full" />
            </div>

            <div className="flex justify-evenly">
                {
                    props.data.images.map((image : string , index : number) => 
                    
                        <img className="mx-2 mt-2 cursor-pointer" src={image} style={{width: '100px'}} onClick={() => setactiveimage(image)} />
                    )
                }
            </div>
        </div>

        <div>
            <h2 className='text-xl font-bold mb-4'>{props.data.title} | {props.data.brand}</h2>

            <p className='mb-4'>{props.data.description}</p>

            <p className='mb-4'>{props.data.category.toUpperCase()}</p>

            <p>Rs. {props.data.price.toFixed(2)}</p>
        </div>

    </div>
  )
}

export default Productdesc