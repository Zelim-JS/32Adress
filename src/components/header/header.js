import { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import './menu.scss';
import { Link } from 'react-router-dom'
import LogoComponent from '../svg/LogoComponent';
const menuArr = [{name:'Забронировать', link: '/booking'}, {name:'Меню',link: '/menu'}, {name:'Доставка',link: '/delivery'}, {name:'Контакты',link: '/contacts'}, {name:'Карьера',link: '/career'}, {name:'Галлерея',link: '/gallery'}]

function Header() {
  const [nav, setNav] = useState(false);
  return (
    <div className="menu-wrapper">
        <div className='menu-logo'><Link className='menu-link' to={'/'}><LogoComponent /></Link></div>
        <div className={nav ? 'menu-items active' : 'menu-items'}>
            {menuArr.map((item, i) =>{
                return <li className="menu-item" key={i}>{<Link onClick={() => setNav(!nav)} to={item.link} className='menu-link'>{item.name}</Link>}</li>
            })}
            
        </div>
        <div onClick={() => setNav(!nav)} className='mobile_btn'>
            {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
          </div>
    </div>
  )
}

export default Header