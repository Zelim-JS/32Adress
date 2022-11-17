import './bookPage.scss'
import {useEffect, useState} from 'react'
function Book() {
  const [value, setValue] = useState('')
  const [height, setHeight] = useState(47)




  return (
    <div className='book-wrapper'>
      <div className='book-label'>
        Бронирование в 32Адрес
      </div>
      <div className='book-main'>
      <div className='inputs-wrapper'>
          
          <div className='book-description'>
          <label htmlFor='user_name'>Ваше имя</label>
          <input className='book-input name'  name='user_name' />
          </div>
          <div className='book-description'>
          <label htmlFor='user_comment'>Пожелания</label>
          <textarea className='book-input' onChange={(e) => { 
            setHeight(e.target.scrollHeight)         
            setValue(e.target.value)}} style={{height: height + 'px'}}  name='user_comment' />
          </div>
      
      </div>

      </div>

      <div className='book-control'>
            <button>Заказать</button>
      </div>
    </div>
  )
}

export default Book