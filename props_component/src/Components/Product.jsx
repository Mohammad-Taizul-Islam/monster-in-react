import React from 'react'

const Product = ({name,price,stock}) => {
  return (
    <div>
        <h2>Product details</h2>
        <h3>Product Name : {name}</h3>
        <h4>Product Price : {price}</h4>
        <h5>Is Product Stock : {stock}</h5>
    </div>
  )
}

export default Product