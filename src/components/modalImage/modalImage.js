import './moadalImage.scss'
import {useState} from 'react'
function ModalImage({img, close}) {
  
  return(
    <div onClick={close} className='modal-image-wrapper'>
    <img src={img} />
    </div>
  )
}

export default ModalImage