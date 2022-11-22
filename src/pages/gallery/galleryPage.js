import ImgBlock from '../../components/imgBlock/imgBlock';
import ModalImage from '../../components/modalImage/modalImage';
import './galleryPage.scss'
import { useState, useEffect } from 'react'

const img = ['https://sun9-20.userapi.com/impg/8P3ccJfrHBsB4GjiosKLwtLLXRu-jeQYO4dd0w/RP9zC5KHlrE.jpg?size=1440x2160&quality=95&sign=78761b658836d8d5abe7fdbceab4bb75&type=album', 'https://sun9-5.userapi.com/impg/HF9TKRXvfrZlXUvifCIrvPo1teAJ_UcxYss39A/z9mnQnNBN-0.jpg?size=1440x2160&quality=95&sign=39e2de12cf7849fcbadb9cfb836000eb&type=album', 'https://sun9-17.userapi.com/impg/US6qPEA7J5z_gwo9iECtwiTiahIYH_bFJYFk7A/qWN4ANU-rFA.jpg?size=1440x2160&quality=95&sign=3f0d7d87541d5f3df4bee636afce05ab&type=album']
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
        {img.map((i, ind) =>{
            return <ImgBlock click={() => handleClick(i)} src={i} key={ind} />
        })}
        {show && <ModalImage close={handleClose} img={current} />}
    </div>
  )
}

export default GalleryPage