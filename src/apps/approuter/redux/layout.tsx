import IndexLayout from "@/components/layouts/IndexLayout"
import React from "react"

const ReduxLayout = ({children, navbar} : { children : React.ReactNode, navbar : React.ReactNode}) => {
  return (
    
    <IndexLayout>
      {navbar}
      {children}
    </IndexLayout>
    
  )
}

export default ReduxLayout