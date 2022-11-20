import React from "react";
import { Card } from "../../components/card/card";
import { CardGroupTitle } from "../../components/card/cardGroupTitle/cardGroupTitle";

const deliveryItems = [
	"Греческий салат с оливками каламата",
	"Цезарь с куриной грудкой на гриле",
	"Цезарь с креветками",
	"Битый огурец и лосось сашими / гриль",
	"Тёплый салат с осьминогом",
	"Буратта с томатами и шпинатом",
];

export function DeliveryPage() {
	return (
		<div className="wrapper">
			<div className="delivery-items-container">
				<CardGroupTitle />
				<Card />
			</div>
		</div>
	);
}
