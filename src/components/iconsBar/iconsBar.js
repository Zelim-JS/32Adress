import './iconsBar.scss'
import Call from '../svg/Call'
import Telegram from '../svg/Telegramm'
import Whatsapp from '../svg/Whapsapp'
import {AiOutlineWhatsApp} from 'react-icons/ai'
function IconsBar() {
  return (
    <div className='wrapper-icons'>
        <div className='icon'>
            <Telegram/>
        </div>
        <div className='icon'>
            <Whatsapp/>
        </div>
        <div className='icon'>
            <Call/>
        </div>
  </div>
  )
}

export default IconsBar