import React from "react";
import "./card.scss";

const sss = {
	img: "https://vkusvill.ru/upload/resize/343192/343192_1200x600x70_c.webp",
	descr: "Какая-нибудь еда",
	price: "299",
};

export function Card({
	image = sss.img,
	description = sss.descr,
	price = sss.price,
}) {
	return (
		<div className="delivery-item">
			<img
				className="delivery-item-image"
				src={image}
				alt={description}
			/>
			<p className="delivery-item-description">{description}</p>
			<p className="delivery-item-price">{price}</p>
			<button className="delivery-item-button">Добавить в заказ</button>
		</div>
	);
}
