import { Carousel } from 'react-responsive-carousel';

import './corousel.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Corousel() {
  const images = ['assets/slider/1.jpg','assets/slider/2.jpg','assets/slider/3.jpg','assets/slider/4.jpg','assets/slider/5.jpg','assets/slider/6.jpg']

  return (
   <>
    <Carousel emulateTouch={true} showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true}>
      {images.map((i, ind) =>{
        return <div key={ind} className='carousel-height'> <img className='img' src={i} /></div>
      })}
     </Carousel>
   </>
  )
}

export default Corousel