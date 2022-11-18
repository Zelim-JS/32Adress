import ImgBlock from '../../components/imgBlock/imgBlock'
import ModalImage from '../../components/modalImage/modalImage'
import './galleryPage.scss'
import { useState, useEffect } from 'react'

const arr = ['https://static-cse.canva.com/blob/847064/29.jpg', 'https://static-cse.canva.com/blob/847064/29.jpg', 'https://static-cse.canva.com/blob/847064/29.jpg', 'https://static-cse.canva.com/blob/847064/29.jpg', 'https://static-cse.canva.com/blob/847064/29.jpg']
function GalleryPage() {
  const [show, setShow] = useState(false)
  const [current, setCurrent] = useState(null)
  const [mobile, setMobile] = useState(false)
  useEffect(() =>{
    if(window.innerWidth <= 829){
      setMobile(true)
    }
  }, [])
  const handleClick = (item) =>{
   if(mobile){
    return 
   }else{
    setCurrent(item)
    setShow(true)
   }
    
  }
  const handleClose = () => {
    setShow(false)
  }
  return (
    <div className='gallery-wrapper'>
        {arr.map((i, ind) =>{
            return <ImgBlock click={() => handleClick(i)} src={i} key={ind} />
        })}
        {show && <ModalImage close={handleClose} img={current} />}
    </div>
  )
}

export default GalleryPage