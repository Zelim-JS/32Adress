import { Carousel } from 'react-responsive-carousel';
import {useState, useEffect} from 'react'
import './corousel.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Corousel() {
    const [images, setImages] = useState([])
    useEffect(() =>{
        fetch('https://picsum.photos/v2/list').then(i => i.json())
        .then(i => setImages(i))

    },[])


  return (
   <>
   
   {/* <img src='https://randomwordgenerator.com/img/picture-generator/business-businessmen-career-colorful-6805.jpg' /> */}
    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} className='main-slide'>

     
     <img style={{width:'100%'}} src='https://i2.wp.com/gameeducation.ru/wp-content/uploads/2021/11/%D0%B3%D0%B5%D0%BD%D1%88-%D0%B5%D0%B4%D0%B0.jpg?fit=1000%2C580&ssl=1' />
     <img style={{width:'100%'}} src='https://cdnn21.img.ria.ru/images/07e4/06/1d/1573629707_0:160:3072:1888_1920x0_80_0_0_19c06fc71c848c394de59ea67f87526e.jpg' />

     <img style={{width:'100%'}} src='https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/104/350/image/base_6805e2ce98.jpg' />

    



    </Carousel>
   </>
  )
}

export default Corousel