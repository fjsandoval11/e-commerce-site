import React from 'react'
import { PRODUCTS } from '../../products'

const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>React project Shop</h1>
        </div>
        <div className='products'>
        {PRODUCTS.map()}
        </div>
    </div>
  )
}

export default Shop