'use client'

import React from 'react'

const Button = ({name , onClick} : {name : string, onClick : () => void}) => {

    // const primary = 

  return (
    <>
        <button className='p-2 px-5 bg-blue-500 rounded-md' onClick={onClick}>{name}</button>
    </>
  )
}

export default Button