import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const param = useParams();

  return (
    <div>
      
      <h3>Product Details</h3>
      <h4>{param.productid}</h4>

    </div>
  )
}

export default ProductDetails
