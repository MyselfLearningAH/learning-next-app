import Productdesc from "@/components/productdesc";
import { getproduct } from "@/utils/utils"
import { GetServerSideProps } from "next";

export const getServerSideProps = (async (context) => {
  const {params} : any= context;
  const product : any = await getproduct(params.productId);
  return {props :  {product}} 
}) satisfies GetServerSideProps<{product : any}>

const ProductDescription = ({product} : {product : any}) => {

  return (
    <>
        <Productdesc {...product} />
    </>
  )
}

export default ProductDescription