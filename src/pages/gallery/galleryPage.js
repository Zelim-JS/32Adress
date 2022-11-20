import ImgBlock from '../../components/imgBlock/imgBlock';
import ModalImage from '../../components/modalImage/modalImage';
import './galleryPage.scss'
import { useState, useEffect } from 'react'

const arr = ['assets/gallery/1.jpg','assets/gallery/2.jpg','assets/gallery/3.jpg','assets/gallery/4.jpg','assets/gallery/5.jpg','assets/gallery/6.jpg','assets/gallery/7.jpg','assets/gallery/8.jpg','assets/gallery/9.jpg','assets/gallery/10.jpg','assets/gallery/11.jpg','assets/gallery/12.jpg','assets/gallery/13.jpg','assets/gallery/14.jpg','assets/gallery/15.jpg','assets/gallery/16.jpg','assets/gallery/17.jpg','assets/gallery/18.jpg','assets/gallery/19.jpg','assets/gallery/20.jpg'
];
function GalleryPage() {
  const [show, setShow] = useState(false)
  const [current, setCurrent] = useState(null)
  const [mobile, setMobile] = useState(false)
  useEffect(() =>{
    if(show){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = ''
    }
  },[show])


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