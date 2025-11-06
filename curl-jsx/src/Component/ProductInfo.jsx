import React from 'react'

const ProductInfo = () => {
    let product={
        name : "Laptop",
        price : 1200,
        availability : "In stock"
    }
  return (
    <div>
        <h3>Product Details</h3>
        <ul style={{listStyle:"number"}}>
            <li>Product name : {product.name}</li>
            <li>Product price : ${product.price} </li>
            <li>Product availability : {product.availability}</li>
        </ul>
    </div>
  )
}

export default ProductInfo