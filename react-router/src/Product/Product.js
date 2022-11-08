import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Product = () => {
    const param=useSearchParams()
    console.log('param',param('name'));
  return (
    <div className='product'>
      <h1>Product</h1>
      <p>This Is product section</p>
    </div>
  )
}

export default Product