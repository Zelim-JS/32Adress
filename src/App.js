import './App.css';
import {Routes, Route} from 'react-router'
import Navbar from './components/navbar/navbar';
import MainPage from './pages/mainPage/mainPage';
import IconsBar from './components/iconsBar/iconsBar';
import Footer from './components/footer/footer';
import Booking from './components/booking/booking';
import MenuPage from './pages/menuPage/menuPage';
import Career from './components/career/career';
import Contacts from './pages/contacts/contacts';
import GalleryPage from './pages/gallery/galleryPage';
import withMessage from './common/hooks.js/withMessage';
import Cart from './components/cart/cart';
import { useState } from 'react';
import {DeliveryPage} from './pages/deliveryPage/deliveryPage'


function App() {
  const [cartItems, setCartItems] = useState([
    {name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 3,
    price: 592},
    {name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 3,
    price: 592},
    {name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 3,
    price: 592},
    {name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 3,
    price: 592},
    {name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 3,
    price: 592}]);
	const BookPage = withMessage(Booking, cartItems);
	const CareerPage = withMessage(Career);

	return (
		<div className="App">
			<div className="main">
				<Navbar />
				<Routes>
					<Route path="/" element={<Cart items={cartItems} />} />
					<Route path="/booking" element={<BookPage />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/delivery" element={<DeliveryPage />} />
					<Route path="/menu" element={<MenuPage />} />
					<Route path="/career" element={<CareerPage />} />
					<Route path="/gallery" element={<GalleryPage />} />
				</Routes>
			</div>

			<Footer>
				<IconsBar />
			</Footer>
		</div>
	);
}

export default App;
