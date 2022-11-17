import './iconsBar.scss'
import {Call, Telegram, Whatsapp} from '../svg'

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