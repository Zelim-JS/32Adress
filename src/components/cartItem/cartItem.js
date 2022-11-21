import {useState, useEffect} from 'react'
import './cartItem.scss'


function CartItem({img = '#eee', name, count=1, price, id, dec, inc, remove}) {
    const [priceTotal, setPrice] = useState(null)

    useEffect(() =>{
        setPrice(() => count * price)
    }, [count])


  return (
    <div className='cart-item-wrapper'>
        <div style={{backgroundColor: img}} className='cart-thumb'>
            <img src={img} />
        </div>
        <div className='cart-item-main'>
            <div className='cart-item-title'>{name}</div>
            <div className='cart-item-count'>
                <button onClick={() => {dec(id)}} className='cart-item-button'>-</button>
                <input value={count} type="number" className='cart-input'/>
                <button onClick={() => inc(id)} className='cart-item-button'>+</button>
                <div className='cart-item-price'>{priceTotal} rub</div>
            </div>
           
        </div>
        <button onClick={() => remove(id)} className='cart-item-button'>X</button>

    </div>
  )
}

export default CartItem