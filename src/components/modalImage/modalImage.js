import './moadalImage.scss'

function ModalImage({img, close}) {
  
  return(
    <div onClick={close} className='modal-image-wrapper'>
    <img src={img} />
    </div>
  )
}

export default ModalImage