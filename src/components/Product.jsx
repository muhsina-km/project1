import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
  return (
    <div>
      
     <div>
        <Link to="products/1">product 1</Link>
     </div>
     <div>
        <Link to="products/2">product 2</Link>
     </div>
     <div>
        <Link to="products/3">product 3</Link>
     </div>

    </div>
  )
}

export default Product
