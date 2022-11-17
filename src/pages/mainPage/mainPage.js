import './mainPage.scss';
import Descriptor from '../../components/decriptor/descriptor';
import Corousel from '../../components/slider/corousel';

function MainPage() {
  return (
    <div className='main-content'>
            <Descriptor/>
            <Corousel />
    </div>
  )
}

export default MainPage