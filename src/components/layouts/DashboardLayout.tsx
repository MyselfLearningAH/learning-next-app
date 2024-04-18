import React, { ReactNode } from 'react'

const DashboardLayout = ({children} : {children : ReactNode}) => {
  return (
    <div className="p-4 h-full">{children}</div>
  )
}

export default DashboardLayout