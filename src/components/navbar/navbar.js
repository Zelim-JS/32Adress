import { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import './navbar.scss';
import { Link } from 'react-router-dom'
import LogoComponent from '../svg/LogoComponent';
const menuArr = [{name:'Забронировать', link: '/booking'},{name:'Галлерея',link: '/gallery'}, {name:'Меню',link: '/menu'}, {name:'Доставка',link: '/delivery'},  {name:'Карьера',link: '/career'}, {name:'Контакты',link: '/'}]

function Navbar({moveToContact}) {
  const [nav, setNav] = useState(false);
  return (
    <div className="nav-wrapper">
        <div className='nav-logo'><Link className='nav-link' to={'/'}><LogoComponent /></Link></div>
        <div className={nav ? 'nav-items active' : 'nav-items'}>
            {menuArr.map((item, i) =>{
                return <li className="nav-item" key={i}>{
                  item.link === '/' ?
                  <Link onClick={() => {
                    moveToContact()
                    setNav(!nav)}} to={item.link} className='menu-link'>{item.name}</Link>
                    :
                    <Link onClick={() => {
                      setNav(!nav)}} to={item.link} className='menu-link'>{item.name}</Link>
                  
                  }</li>
            })}
            
        </div>
        <div onClick={() => setNav(!nav)} className='mobile_btn'>
            {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
          </div>
    </div>
  )
}

export default Navbar