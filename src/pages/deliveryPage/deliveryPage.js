import React from "react";
import { Card } from "../../components/card/card";
import { useState, useEffect } from "react";
import Cart from '../../components/cart/cart';
import CartButton from '../../components/cartButton/cartButton'
import "./deliveryPage.scss";
const deliveryItems = [
	{id:1,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 592},
	{id:2,name: 'Цезарь с бараниной и грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 200},
	{id:3,name: 'Цезарь с куриной грудкой на гриле', img: 'https://eda.yandex/images/1380298/9057ba70a760213ab552e93eebc57969-450x300.jpg', count: 1,
	price: 300},
	

	
];



export function DeliveryPage({decItem, addItem, removeItem, incItem, cartItems}) {
	const [showCart, setShowCart] = useState(false);
	//  [countOfItems, setCountOfItems] = useState(0);

	//  const countOfItems = cartItems.reduce((acc, i) => acc + i.count, 0)



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



	return (
		
		<div className="delivery-page-wrapper">
			{cartItems.length > 0 && <CartButton countOfItems={0} openCart={openCart} />}
			{showCart && <Cart closeCartbtn={closeCartbtn} closeCart={closeCart} remove={removeItem} inc={incItem} dec={decItem} items={cartItems} />}
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



