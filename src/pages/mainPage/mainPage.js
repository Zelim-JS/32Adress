import './mainPage.scss';
import { useEffect, useRef } from 'react';
import Descriptor from '../../components/decriptor/descriptor';
import Corousel from '../../components/corousel/corousel';
import MainMenu from '../../components/MainMenu/MainMenu';
import Contacts from '../contacts/contacts';

function MainPage({scroll, toContact, contactsRef}) {
  
  


  useEffect(() =>{
    if(toContact){
      scroll()
    }
    
  }, [toContact])

  return (
   <div>
     <div className='main-content'>
            <Descriptor/>
            <div className='corousel-main'>
              <Corousel />
            </div>
            
    </div>
   <div style={{backgroundColor: '#fff', padding: '20px 0 20px'}}>
    {/* <MenuPage /> */}
    <MainMenu />
   </div>
    <Contacts refer={contactsRef} />
   </div>

  )
}

export default MainPage