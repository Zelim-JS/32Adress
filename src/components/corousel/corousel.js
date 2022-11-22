import { Carousel } from 'react-responsive-carousel';

import './corousel.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Corousel() {
  const images = ['assets/slider/1.jpg','assets/slider/2.jpg','assets/slider/3.jpg','assets/slider/4.jpg','assets/slider/5.jpg','assets/slider/6.jpg']
  const img = ['https://sun9-5.userapi.com/impg/qxI7rw2xxNP-DL3f4ElLrFBtTfbV6Wll9EdY7Q/DLs8e10NMkk.jpg?size=720x1080&quality=96&sign=47c3131a86bf7ec1b3dcd28b420f10fe&type=album','https://sun9-62.userapi.com/impg/J74K-XeJ5DszfIBkJ19mEOBSAbNtMzNOrYg_8Q/cRS21jmZsYY.jpg?size=761x1080&quality=96&sign=9db2b7b1404caeafee1ccafa1017ce31&type=album','https://sun9-46.userapi.com/impg/LkOkx56xaiXdqkw_abJ-e4U22wzyBbe49lQGlg/f1NAygX1Dx4.jpg?size=1440x2160&quality=96&sign=db4020a4283613bf1870371febe7b0c0&type=album','https://sun9-20.userapi.com/impg/8P3ccJfrHBsB4GjiosKLwtLLXRu-jeQYO4dd0w/RP9zC5KHlrE.jpg?size=1440x2160&quality=95&sign=78761b658836d8d5abe7fdbceab4bb75&type=album', 'https://sun9-5.userapi.com/impg/HF9TKRXvfrZlXUvifCIrvPo1teAJ_UcxYss39A/z9mnQnNBN-0.jpg?size=1440x2160&quality=95&sign=39e2de12cf7849fcbadb9cfb836000eb&type=album', 'https://sun9-17.userapi.com/impg/US6qPEA7J5z_gwo9iECtwiTiahIYH_bFJYFk7A/qWN4ANU-rFA.jpg?size=1440x2160&quality=95&sign=3f0d7d87541d5f3df4bee636afce05ab&type=album']
  return (
   <>
    <Carousel emulateTouch={true} showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true}>
      {img.map((i, ind) =>{
        return <div key={ind} className='carousel-height'> <img className='img' src={i} /></div>
      })}
     </Carousel>
   </>
  )
}

export default Corousel