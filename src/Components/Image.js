import React from 'react'

const Image = ({product}) => {
  return (
    <div>
    <img src={product.image} alt="Product"  />
    </div>
  )
}

export default Image