'use client'
import { useRouter } from 'next/navigation'
import React, { ReactElement, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './lib/hooks'
import { decrement, increment } from './lib/slices/counterSlices'

const Index = () => {

  const router = useRouter();

  setTimeout(() => {
    router.push('/redux')
  },3000)

  return (
    <div className='p-4'>
      <p className='text-black'>Learning Redux....</p>
      <p className='text-black'>Moving to /redux Route</p>
    </div>
  )
}

export default Index