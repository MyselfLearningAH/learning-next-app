import React, { ReactNode } from 'react'

const IndexLayout = ({children} : {children : ReactNode}) => {
  return (
    // <div style={{height: "100vh"}} className='bg-sky-900 cstheme'>{children}</div>
    <div style={{height: "100vh"}} className='cstheme'>{children}</div>
  )
}

export default IndexLayout