import React from "react"

const ProductsLayout = ({children} : { children : React.ReactNode }) => {
  return (
    <div>
        <h1 className="text-2xl font-bold p-4">Products</h1>

        {children}
    </div>
  )
}

export default ProductsLayout