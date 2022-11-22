import React from "react";
import "./card.scss";



export function Card({
	img, 
	name,
	price,
	count,
	id,
	addItem
}) {
	return (
		<div className="delivery-item">
			<img
				className="delivery-item-image"
				src={img}
				alt='image'
			/>
			<p className="delivery-item-description">{name}</p>
			<p className="delivery-item-price">{price} руб</p>
		<button onClick={() => {addItem({img, name, price, id, count})}} className="delivery-item-button">Добавить в заказ</button>
		</div>
	);
}
