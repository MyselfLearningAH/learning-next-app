import Card from "@/components/card";
import { allproducts } from "@/utils/utils"

const Products = async () => {

    const allProducts : any = await allproducts();


  return (
    <>
        <div className="grid grid-cols-3 gap-4 p-4 justify-items-center">

            {
                allProducts.status === 200 ?
                    allProducts.data.products.map((product : any, index : number) => 
                        <Card {...product} />
                    )
                    :

                    <p>{allProducts.error}</p>
            }

        </div>

    </>
  )
}

export default Products