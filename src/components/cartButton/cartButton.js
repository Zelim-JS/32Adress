import React from 'react'
import './cartButton.scss'
import {CiShoppingCart} from 'react-icons/ci'
function CartButton({openCart}) {
  return (
    <div onClick={openCart} className='cartButton'>
        <CiShoppingCart/>

    </div>
  )
}

export default CartButton