import './descriptor.scss'
import { Link } from 'react-router-dom'

function Descriptor() {
  return (
    <div className='wrapper-descriptor'>
        <h2>32 Street</h2>
        <p>Loro – это классика вне времени, где главное – это гости ресторана, качественная еда, индивидуальный сервис и еще больше внимания к деталям. Кухня Loro строится вокруг продукта, его сезонности и чистоты вкуса, много открытого огня и традиционной итальянской кухни на новый лад. Каждый день с 8:00 утра в ресторане готовят завтраки.</p>
        <div className='flex'>
            <button className='descr-button'><Link className='menu-link' to={'/booking'}>Забронировать стол</Link></button>
            <button className='descr-button'><Link className='menu-link' to={'/delivery'}>Доставка</Link></button>
        </div>
    
    </div>
  )
}

export default Descriptor