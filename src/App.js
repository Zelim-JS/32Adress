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
import {useCallback, useState} from 'react'
import {DeliveryPage} from './pages/deliveryPage/deliveryPage'



function App() {
	const [cartItems, setCartItems] = useState([]);
	const BookPage = withMessage(Booking);
	const CareerPage = withMessage(Career);
	
	const decItem = (id) => {
		const newItem = cartItems.map(i =>{
			if(i.id === id){
				if(i.count > 1){
					i.count--
				    return i
				}else{
					return i
				}
			}else return i
	}) 

	setCartItems(newItem)
}

const addItem = (item) => {
	
	if(cartItems.find(i => i.id === item.id)){
		const newArr = cartItems.map(i => i.id === item.id ? {...i, count: ++i.count} : i)
		setCartItems(newArr)
		
	}else{
		setCartItems(items => [...items, item])
	}
	
};

const removeItem = useCallback((id) =>{
	if(window.confirm('Вы хотите удалить позицию')){
		setCartItems(items =>{
			return items.filter(i =>{
				return i.id !== id
			})
		})
	}
}, [cartItems])


const incItem = useCallback((id) =>{
	setCartItems(items => items.map(i =>{
		if(i.id === id){
			i.count++
			return i
		}else {
			return i
		}}))

}, [cartItems])

	



	return (
		<div className="App">
			<div className="main">
				<Navbar />
				
				<Routes>
					<Route path="/" element={<MainPage/>} />
					<Route path="/booking" element={<BookPage />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/delivery" element={<DeliveryPage decItem={decItem} cartItems={cartItems} incItem={incItem} removeItem={removeItem} addItem={addItem} />} />
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
