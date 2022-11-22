import './mainPage.scss';
import Descriptor from '../../components/decriptor/descriptor';
import Corousel from '../../components/corousel/corousel';
import MenuPage from '../menuPage/menuPage';
import MainMenu from '../../components/MainMenu/MainMenu';
import Contacts from '../contacts/contacts';
function MainPage() {
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
    <Contacts />
   </div>

  )
}

export default MainPage