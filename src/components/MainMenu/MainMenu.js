import React from 'react'
import { Link } from 'react-router-dom'
import './mainmenu.scss'
const menu = ['assets/menu/1.jpg']


function MainMenu() {
  return (
    <div className='main-menu-wrapper'>
        {/* <h1>Меню</h1> */}
        <div className='main-menu-item'>
            <img src='https://sun9-64.userapi.com/impg/E_SPGlKeWWq9F-f_QgIrHNEORzgc9WE-O1r_Ug/-4pTtSUzJ68.jpg?size=763x1080&quality=96&sign=ce42f223aa374d4c804f195df92aea29&type=album'/>
        </div>
        <Link to={'/menu'}><button className='main-menu-btn'>Открыть полное меню</button></Link>
    </div>
  )
}

export default MainMenu