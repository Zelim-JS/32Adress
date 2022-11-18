import ImgBlock from '../../components/imgBlock/imgBlock'
import ModalImage from '../../components/modalImage/modalImage'
import './galleryPage.scss'


const arr = ['https://static-cse.canva.com/blob/847064/29.jpg', 'https://static-cse.canva.com/blob/847064/29.jpg', 'https://static-cse.canva.com/blob/847064/29.jpg', 'https://static-cse.canva.com/blob/847064/29.jpg', 'https://static-cse.canva.com/blob/847064/29.jpg']
function GalleryPage() {
  return (
    <div className='gallery-wrapper'>
        {arr.map((i, ind) =>{
            return <ImgBlock src={i} key={ind} />
        })}
        {/* <ModalImage /> */}
    </div>
  )
}

export default GalleryPage