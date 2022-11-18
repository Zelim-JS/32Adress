import './imgBlock.scss'

function ImgBlock({src}) {
  return (
    <div className='img-block-wrapper'>
        <img src={src} alt='image'/>
    </div>
  )
}

export default ImgBlock