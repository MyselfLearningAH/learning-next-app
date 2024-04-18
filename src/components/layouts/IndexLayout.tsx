import React, { ReactNode } from 'react'

const IndexLayout = ({children} : {children : ReactNode}) => {
  return (
    <div style={{height: "100vh"}} className='bg-sky-900'>{children}</div>
  )
}

export default IndexLayout