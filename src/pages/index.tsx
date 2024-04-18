'use client'
import { useRouter } from 'next/navigation'
import React, { ReactElement, useEffect } from 'react'

const Index = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/dashboard');
    },5000)
  }, [router])


  return (
    <div>Testing PageRouter.... wait 5 sec</div>
  )
}

export default Index