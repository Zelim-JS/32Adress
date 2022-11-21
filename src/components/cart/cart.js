import {useState, useEffect, useRef} from 'react'
import * as yup from 'yup'
import './cart.scss';
import cn from 'classnames';
import CartItem from '../cartItem/cartItem';
import { Formik } from 'formik';
function Cart({items}) {
  const [height, setHeight] = useState(42)
  const validationSchema = yup.object().shape({
      user_name: yup.string().min(3, 'Минимум 3 символа').matches(/^[a-zA-Zа-яА-Я]+$/, "Должны быть только буквы").typeError('Должно быть строкой').required('Обязательное поле'),
      user_phone:yup.string().matches(/^[0-9]+$/, "Должны быть только цифры").min(10, 'Укажите полный номер телефона 10 цифр').max(20, 'Введите корректный номер').required('Обязательное поле'),
      user_address: yup.string().min(3, 'Минимум 5 символа').matches(/^[a-zA-Zа-яА-Я]+$/, "Должны быть только буквы").required('Обязательное поле')
    })
   

  return (
    <div className='cart-wrapper'>
        <div className='cart-title'>
            <h2>Ваш заказ:</h2>
        </div>
        <div className='cart-items'>
                {items.map((i, ind) =>{
                  return <CartItem key={ind} name={i.name} img={i.img} price={i.price} count={i.count} /> 
                })}
                
        </div>
        <div className='cart-order'>
        <Formik
        initialValues={{
        user_name: '',
        user_address: '',
        user_phone: '',
        user_comment: '',
        }}
        validationSchema={validationSchema}
        validateOnBlur
        onSubmit={values => console.log(values)}
        >
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
            
            <div>
                <div className='book-label'>
                
                </div>
                <div style={{borderBottom: 'none', paddingTop: '15px'}} className='book-main'>
                  <div className='inputs-wrapper'>
                      
                      <div className='book-description'>
                          <input placeholder='Имя' className='book-input'  name='user_name'
                          onBlur={handleBlur}
                          value={values.user_name}
                          onChange={handleChange}/>
                          {touched.user_name && errors.user_name && <p className='error-message'>{errors.user_name}</p>}
                      </div>
    
                      <div className='book-description'>
                          <input placeholder='Номер телефона' className='book-input name'  name='user_phone' 
                            onBlur={handleBlur}
                            value={values.user_phone}
                            onChange={handleChange}
                          />
                          {touched.user_phone && errors.user_phone && <p className='error-message'>{errors.user_phone}</p>}
                      </div>
                      <div className='book-description'> 
                          <input placeholder='Адрес доставки' className='book-input'  name='user_address'
                          onBlur={handleBlur}
                          value={values.user_address}
                          onChange={handleChange}/>
                          {touched.user_address && errors.user_address && <p className='error-message'>{errors.user_address}</p>}
                      </div>
                      <div className='book-description'>
                          <textarea placeholder='Комментарий' className='book-input' onChange={(e) => { 
                            if(e.target.scrollHeight <= 85){
                              setHeight(e.target.scrollHeight)}
                            }
                            } style={{height: height + 'px'}}  name='user_comment' />
                      </div>
                  
                  </div>
    
                </div>
    
                <div className='book-control '>
                      <button
                        className={cn('order',isValid && dirty && 'button-active')}
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                        type='submit'
                      >Отправить</button>
                </div>
            </div>
          )}
        
        </Formik>
        </div>
    </div>
  )
}

export default Cart