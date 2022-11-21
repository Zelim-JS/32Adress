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
import { useState, useCallback, useEffect } from 'react';
import {DeliveryPage} from './pages/deliveryPage/deliveryPage'

import CartButton from './components/cartButton/cartButton'

function App() {
	const [showCart, setShowCart] = useState(false);
  	const [cartItems, setCartItems] = useState([]);
	const BookPage = withMessage(Booking, cartItems);
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

const openCart = () =>{
	setShowCart(true)
}

const closeCart = (e) => {
	if(e.target.className === 'cart-background'){
		setShowCart(false)
}
}

const closeCartbtn = (e) => {
	setShowCart(false)
}

const addItem = useCallback((item, id) => {
	if(cartItems.find(i => i.id === id)){
		setCartItems(items => items.map(i => i.id === id ? {...i, count: i.count++} : i))
		
	}else{
		setCartItems(items => [...items, item])
	}
	
},[cartItems])

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
				{cartItems.length > 0 && <CartButton openCart={openCart} />}
				{showCart && <Cart closeCartbtn={closeCartbtn} closeCart={closeCart} remove={removeItem} inc={incItem} dec={decItem} items={cartItems} />}
				<Routes>
					<Route path="/" element={<MainPage/>} />
					<Route path="/booking" element={<BookPage />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/delivery" element={<DeliveryPage addItem={addItem} />} />
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
