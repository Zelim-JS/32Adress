import './iconsBar.scss'
import Call from '../svg/Call'
import Telegram from '../svg/Telegramm'
import Whatsapp from '../svg/Whapsapp'
function IconsBar() {
  return (
    <div className='wrapper-icons'>
        <div className='icon'>
            <Telegram/>
        </div>
        <div className='icon'>
        <a href="https://wa.me/+79850390039">
            <Whatsapp/>
        </a>
            
        </div>
        <div className='icon'>
        <a href="tel:+79998887766">
            <Call/>
            </a>
        </div>
  </div>
  )
}



export default IconsBar