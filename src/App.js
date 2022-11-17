import './App.css';
import {Routes, Route} from 'react-router'
import Menu from './components/menu/menu';
import MainPage from './pages/mainPage/mainPage';
import IconsBar from './components/iconsBar/iconsBar';
import Footer from './components/footer/footer';
import BookPage from './pages/book/bookPage';
import Contacts from './pages/contacts/contacts';

function App() {
  return (
    
    <div className="App">
      <div className='main'>
      <Menu/>
      <Routes>
      <Route path='/' element={<MainPage/> }/>
      <Route path='/booking' element={<BookPage/> }/>
      <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
      </div>

     <Footer>
      <IconsBar/>
     </Footer>
     
      </div>
      
  );
}

export default App;
