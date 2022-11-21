import React from 'react'
import './cartButton.scss'
import {CiShoppingCart} from 'react-icons/ci'
function CartButton({openCart, countOfItems}) {
  return (
    <div onClick={openCart} className='cartButton'>
        <CiShoppingCart/>
        <div className='cart-info'>{countOfItems}</div>
    </div>
  )
}

export default CartButton