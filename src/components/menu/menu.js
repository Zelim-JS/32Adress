import './menu.scss'
import { Link } from 'react-router-dom'
const menuArr = [{name:'Бронь', link: '/booking'}, {name:'Меню',link: '/menu'}, {name:'Доставка',link: '/delivery'}, {name:'Контакты',link: '/contacts'}, {name:'Карьера',link: '/career'}, {name:'Галлерея',link: '/gallery'}]

function Menu() {
  return (
    <div className="menu-wrapper">
        <div className='menu-logo'><Link className='menu-link' to={'/'}>32 Street</Link></div>
        <div className='menu-items'>
            {menuArr.map((item, i) =>{
                return <li className="menu-item" key={i}>{<Link to={item.link} className='menu-link'>{item.name}</Link>}</li>
            })}
        </div>
    </div>
  )
}

export default Menu