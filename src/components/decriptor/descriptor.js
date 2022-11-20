import './descriptor.scss';
import LogoComponent from '../svg/LogoComponent';
import { Link } from 'react-router-dom'

function Descriptor() {
  return (
    <div className='wrapper-descriptor'>
        <p><span>АДРЕС 39</span> - гастрономическое  путешествие по соседству.
        Мы подарим ощущение выходных в другой стране, теперь для этого не обязательно организовывать поездку или заранее решать что именно кушать. 
        Наше пространство объединяет не только людей за одним столом, но и кухни мира под одной крышей. 
        Насладитесь морепродуктами, словно заглянули на рыбный рынок Франции, 
        пастой в зоне патио в Итальянской атмосфере или простыми и понятными блюдами в зоне гостиной, словно зашли в гости к другу.
        Ваш новый друг, 
        «Адрес 39»</p>
        <div className='flex'>
            <button className='descr-button'><Link className='menu-link' to={'/booking'}>Забронировать стол</Link></button>
            <button className='descr-button'><Link className='menu-link' to={'/delivery'}>Доставка</Link></button>
        </div>
    
    </div>
  )
}

export default Descriptor