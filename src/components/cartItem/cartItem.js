import {useState, useEffect} from 'react'
import './cartItem.scss'
function CartItem({img = '#eee', name, count=1, price}) {
    const [number, setCount] = useState(count)
    const addCount = () => {
        setCount(val => val +1)
    }
    const deleteCount = () => {
        if(number > 0)
        setCount(val => val -1)
    }

    const handleAdd = (e) => {
        setCount(e.target.value)
    }

    const removeItem = () => {
        if(window.confirm('Do you want to remove this item')){
            
        }
    }



  return (
    <div className='cart-item-wrapper'>
        <div style={{backgroundColor: img}} className='cart-thumb'>
            <img src={img} />
        </div>
        <div className='cart-item-main'>
            <div className='cart-item-title'>{name}</div>
            <div className='cart-item-count'>
                <button onClick={deleteCount} className='cart-item-button'>-</button>
                <input onChange={handleAdd} value={count} type="number" className='cart-input'/>
                <button onClick={addCount} className='cart-item-button'>+</button>
                <div className='cart-item-price'>{price}r</div>
            </div>
           
        </div>
        <button onClick={removeItem} className='cart-item-button'>X</button>

    </div>
  )
}

export default CartItem