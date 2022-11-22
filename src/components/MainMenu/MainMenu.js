import React from 'react'
import './mainmenu.scss'
const menu = ['assets/menu/1.jpg']


function MainMenu() {
  return (
    <div className='main-menu-wrapper'>
        {/* <h1>Меню</h1> */}
        <div className='main-menu-item'>
            <img src='assets/menu/1.jpg'/>
        </div>
        <button className='main-menu-btn'>Открыть полное меню</button>
    </div>
  )
}

export default MainMenu