import './booking.scss';

import LogoComponent from '../svg/LogoComponent'
import { useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import { Formik } from "formik";
import * as yup from "yup";

function Booking({succes, error, loading, items}) {
  const [height, setHeight] = useState(42);
  const [status, setStatus] = useState(null);
  const validationSchema = yup.object().shape({
    user_name: yup.string().min(3, 'Минимум 3 символа').matches(/^[a-zA-Zа-яА-Я]+$/, "Должны быть только буквы").typeError('Должно быть строкой').required('Обязательное поле'),
    user_phone:yup.string().matches(/^[0-9]+$/, "Должны быть только цифры").min(10, 'Укажите полный номер телефона 10 цифр').max(20, 'Введите корректный номер').required('Обязательное поле'),
    user_count: yup.number().min(1, 'Минимум 1').typeError('Укажите число').required('Обязательное поле'),
    user_date: yup.date().required('Выберите дату')
  })
  const form = useRef()
 
  

  const sendEmail = (e) => {
    e.preventDefault();
    loading()
    emailjs.sendForm('service_qhako9q', 'template_8ks49', form.current, '2T7QvaI7kHZVYd3VK')
      .then((res) => {
          succes()
      }, (err) => {
          console.log(err)
          error()
      });

      e.target.reset();
  };

  return (
    <Formik
    initialValues={{
      user_name: '',
      user_phone: '',
      user_comment: '',
      user_date: '',
      user_count: '1',
      user_items: ''
    }}
    validationSchema={validationSchema}
    validateOnBlur
    
    >
      {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
        <form onSubmit={sendEmail} ref={form} className='book-wrapper'>
            <div className='book-label'>
             <span> Бронирование стола</span> <span className='logo black'><LogoComponent color='black'/></span>
            </div>
            <div className='book-main'>
              <div className='inputs-wrapper'>
                  
                  <div className='book-description'>
                      <label className='label' htmlFor='user_name'>Ваше имя</label>
                      <input className='book-input'  name='user_name'
                      onBlur={handleBlur}
                      value={values.user_name}
                      onChange={handleChange}/>
                      {touched.user_name && errors.user_name && <p className='error-message'>{errors.user_name}</p>}
                  </div>
                  <div className='book-description'>
                      <label className='label'  htmlFor='user_date'>Выберите дату</label>
                      <input type={'date'} className='book-input '  name='user_date'
                      onBlur={handleBlur}
                      value={values.user_date}
                      onChange={handleChange}
                      />
                      {touched.user_date && errors.user_date && <p className='error-message'>{errors.user_date}</p>}
                  </div>
                  <div className='book-description'>
                      <label className='label'  htmlFor='user_date'>Колличество мест</label>
                      <input type={'number'} min={1} className='book-input '  name='user_count'
                        onBlur={handleBlur}
                        value={values.user_count}
                        onChange={handleChange}
                      />
                      {touched.user_count && errors.user_count && <p className='error-message'>{errors.user_count}</p>}
                  </div>

                  <div className='book-description'>
                      <label className='label'  htmlFor='user_phone'>Ваш номер телефона</label>
                      <input  className='book-input name'  name='user_phone' 
                        onBlur={handleBlur}
                        value={values.user_phone}
                       
                        onChange={handleChange}
                      />
                      {touched.user_phone && errors.user_phone && <p className='error-message'>{errors.user_phone}</p>}
                  </div>
                  <div className='book-description'>
                      <label className='label'  htmlFor='user_comment'>Пожелания</label>
                      <textarea className='book-input' onChange={(e) => { 
                        if(e.target.scrollHeight <= 85){
                          setHeight(e.target.scrollHeight)}
                        }
                        } style={{height: height + 'px'}}  name='user_comment' />
                  </div>

            
              
              </div>

            </div>
            
            <div className='book-control'>
              <p>Служба поддержки: Обращение в техподдержку</p>
                  <button
                    className={isValid && dirty && 'button-active'}
                    disabled={!isValid && !dirty}
                    type='submit'
                  >Заказать</button>
            </div>
        </form>
        
      )}
    
    </Formik>
  )
}

export default Booking