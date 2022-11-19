import './mainPage.scss';
import Descriptor from '../../components/decriptor/descriptor';
import Corousel from '../../components/corousel/corousel';

function MainPage() {
  return (
    <div className='main-content'>
            <Descriptor/>
            <div className='corousel-main'>
            <Corousel />
            </div>
    </div>
  )
}

export default MainPage