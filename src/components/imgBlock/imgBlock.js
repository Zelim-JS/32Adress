import './imgBlock.scss'

function ImgBlock({src, click}) {
  return (
    <div onClick={click} className='img-block-wrapper'>
        <img src={src} alt='image'/>
    </div>
  )
}

export default ImgBlock