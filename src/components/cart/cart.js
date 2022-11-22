import {useState, useRef} from 'react'
import * as yup from 'yup'
import './cart.scss';
import cn from 'classnames';
import CartItem from '../cartItem/cartItem';
import {AiOutlineClose} from 'react-icons/ai'
import { Formik } from 'formik';
import emailjs from '@emailjs/browser';

function Cart({items, dec, inc, remove,closeCart, closeCartbtn, succes, error, loading,clearCart}) {
  
  const [height, setHeight] = useState(42)
  const validationSchema = yup.object().shape({
      user_name: yup.string().min(3, 'Минимум 3 символа').matches(/^[a-zA-Zа-яА-Я]+$/, "Должны быть только буквы").typeError('Должно быть строкой').required('Обязательное поле'),
      user_phone:yup.string().matches(/^[0-9]+$/, "Должны быть только цифры").min(10, 'Укажите полный номер телефона 10 цифр').max(20, 'Введите корректный номер').required('Обязательное поле'),
      user_address: yup.string().min(3, 'Минимум 5 символа').required('Обязательное поле')
    }) 
  const order = items.map(i => {
    return `Название: ${i.name},  Колл: ${i.count}  `
  }).join('\n')

  const totalSum = items.reduce((acc, i) => acc + (i.count * i.price), 0)

  const form = useRef()
    ///Оптимизировать 
  const sendEmail = (e) => {
    e.preventDefault();
    loading()
    emailjs.sendForm('service_qhako9q', 'template_ic8gp', form.current, '2T7QvaI7kHZVYd3VK')
      .then((res) => {
        succes()
      }, (err) => {
        error()
          
      });

      e.target.reset();
  };
  ////
  return (
    <div onClick={closeCart} className='cart-background'>
      <div className='cart-close-btn'>
          <AiOutlineClose onClick={closeCartbtn}/>
      </div>
        <div className='cart-wrapper'>
        <div className='cart-title'>
            <h2>Ваш заказ:</h2>
        </div>
        <div className='cart-items'>
                {items.map((i, ind) =>{
                return <CartItem remove={remove} inc={inc} dec={dec} id={i.id}key={i.id} name={i.name} img={i.img} price={i.price} count={i.count} /> 
                })}
                
        </div>
        <div className='cart-result'>Сумма заказа: {totalSum}</div>
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
        
        >
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
            
            <form onSubmit={sendEmail} ref={form}>
                <div className='book-label'>
                
                </div>
                <div style={{borderBottom: 'none', paddingTop: '15px'}} className='book-main'>
                  <div  className='inputs-wrapper'>
                      
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
                          <textarea placeholder='Комментарий' className='book-input'  onChange={(e) => { 
                            if(e.target.scrollHeight <= 85){
                              setHeight(e.target.scrollHeight)}
                            }
                            } style={{height: height + 'px'}}  name='user_comment' />
                      </div>
                      <div className='book-description' style={{display: 'none'}}>
                          <textarea onChange={handleChange} placeholder='Комментарий' className='book-input' value={order}   name='user_order' />
                      </div>
                  
                  </div>
    
                </div>
    
                <div className='book-control '>
                      <button
                        className={cn('order',isValid && dirty && 'button-active')}
                        disabled={!isValid && !dirty}
                        type='submit'
                      >Отправить</button>
                </div>
            </form>
          )}
        
        </Formik>
        </div>
    </div>
    </div>
  )
}

export default Cart