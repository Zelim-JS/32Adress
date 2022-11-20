
import './message.scss';
import {Link} from 'react-router-dom';
import LogoComponent from '../svg/LogoComponent';
function Message({message, Icon, loading}) {


  return (
    <div className='book-wrapper'>
      <div className='book-label'>
                <span>Бронирование стола</span> <span className='logo black'><LogoComponent color='black'/></span>
      </div>
      <div className='message-flex'>
          <div><Icon size={50} /></div>
          <div className='message-text'>{message}</div>
      </div>
        {!loading && <div className='message-btn'>
          <Link  to={'/'}>
            <button>Вернутся на главную</button>
          </Link>
        </div>}
    </div>
  )
}

export default Message