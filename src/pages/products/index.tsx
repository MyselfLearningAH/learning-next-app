import Card from "@/components/card";
import { GetStaticProps, GetServerSideProps } from "next";
import { ReactElement } from "react";


//works at once on build
// export const getStaticProps = (async (context) => {
//     const res : any = await fetch('https://dummyjson.com/products');
//     const allproducts = await res.json();
//     return {props :  {allproducts}} 
// }) satisfies GetStaticProps<{allproducts : any}>

//works on every request
export const getServerSideProps = (async () => {
    const res : any = await fetch('https://dummyjson.com/products');
    const allproducts = await res.json();
    return {props :  {allproducts}} 
}) satisfies GetServerSideProps<{allproducts : any}>

const Products = ({allproducts} : any) => {

   console.log(allproducts)


  return (
    <>
        <div className="grid grid-cols-3 gap-4 p-4 justify-items-center">

            {
                allproducts.products.length !== 0 ?
                allproducts.products.map((product : any, index : number) => 
                        <Card {...product} />
                    )
                    :

                    <p>No Products found</p>
            }

        </div>

    </>
  )
}

Products.getLayout = function getLayout(page : ReactElement) {
    return (
        <ProductsLayout>
            {page}
        </ProductsLayout>
    )
}


const ProductsLayout = ({children} : { children : React.ReactNode }) => {
    return (
      <div>
          <h1 className="text-2xl font-bold p-4">Products</h1>
  
          {children}
      </div>
    )
}

export default Products