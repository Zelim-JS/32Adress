import './bookPage.scss'

import LogoComponent from '../../assets/svg/LogoComponent';
import {useEffect, useState} from 'react'
import { Formik } from "formik";
import * as yup from "yup";

function Book() {
  const [height, setHeight] = useState(42)
  const validationSchema = yup.object().shape({
    user_name: yup.string().min(3, 'Минимум 3 символа').matches(/^[a-z]+$/, "Должны быть только буквы").typeError('Должно быть строкой').required('Обязательное поле'),
    user_phone:yup.string().matches(/^[0-9]+$/, "Должны быть только цифры").min(10, 'Укажите полный номер телефона 10 цифр').max(20, 'Введите корректный номер').required('Обязательное поле'),
    user_count: yup.number().min(1, 'Минимум 1').typeError('Укажите число').required('Обязательное поле')
  })


  return (
    <Formik
    initialValues={{
      user_name: '',
      user_phone: '',
      user_comment: '',
      user_date: '',
      user_count: '1',
    }}
    validationSchema={validationSchema}
    validateOnBlur
    onSubmit={values => console.log(values)}
    >
      {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
        
        <div className='book-wrapper'>
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
                      <input type={'date'} className='book-input '  name='user_phone' />
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
                      <input className='book-input name'  name='user_phone' 
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
                    onClick={handleSubmit}
                    type='submit'
                  >Заказать</button>
            </div>
        </div>
      )}
    
    </Formik>
  )
}

export default Book