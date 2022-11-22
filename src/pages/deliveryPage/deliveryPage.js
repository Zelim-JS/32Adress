import React from "react";
import { Card } from "../../components/card/card";
import { useState, useEffect } from "react";
import withMessage from "../../common/hooks.js/withMessage";
import Cart from '../../components/cart/cart';
import CartButton from '../../components/cartButton/cartButton'
import "./deliveryPage.scss";
const deliveryItems = [
	{id:1,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 592},
	{id:2,name: 'Цезарь с бараниной и грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 200},
	{id:4,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},
	{id:5,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},
	{id:6,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},
	{id:7,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},
	{id:8,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},
	{id:9,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},
	{id:0,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},
	{id:13,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},
	{id:23,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},{id:33,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},
	{id:43,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},

	{id:53,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},
	{id:63,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},
	{id:73,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},

	{id:83,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},

	

	
];



export function DeliveryPage({decItem, addItem, removeItem, incItem, cartItems, clearCart}) {
	const [showCart, setShowCart] = useState(false);
	

	const countOfItems = cartItems.reduce((acc, i) => acc + i.count, 0)

	useEffect(() => {
		if(showCart){
			window.scrollTo({top: 0, behavior: 'smooth'});
		}
	}, [showCart])

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

const CartFull = withMessage(Cart, cartItems, true, clearCart)

	return (
		
		<div className="delivery-page-wrapper">
			{cartItems.length > 0 && <CartButton countOfItems={countOfItems} openCart={openCart} />}
			{showCart && <CartFull  closeCartbtn={closeCartbtn} closeCart={closeCart} remove={removeItem} inc={incItem} dec={decItem} items={cartItems} />}
			<div className="delivery-title-wrapper">
				<h1 className="delivery-title"> Меню доставки</h1>
			</div>
			<div className="delivery-items-wrapper">
				{deliveryItems.map((i) => {
					return <Card count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img} addItem={addItem} />;
				})}
				
			</div>
		</div>
	);
}



