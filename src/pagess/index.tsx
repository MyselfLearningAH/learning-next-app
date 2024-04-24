'use client'
import { useRouter } from 'next/navigation'
import React, { ReactElement, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './lib/hooks'
import { decrement, increment } from './lib/slices/counterSlices'

const Index = () => {

  const router = useRouter();

  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      Learning Redux
      Counter = {count};
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Index