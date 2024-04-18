import Productdesc from "@/components/productdesc";
import { getproduct } from "@/utils/utils"

const ProductDescription = async ({params} : {params : {productId : string}}) => {

    const product : any = await getproduct(params.productId);

    console.log(product)

  return (
    <>
        <Productdesc {...product} />
    </>
  )
}

export default ProductDescription