import React from "react";
import { Card } from "../../components/card/card";
import { CardGroupTitle } from "../../components/card/cardGroupTitle/cardGroupTitle";
import "./deliveryPage.scss";

const deliveryItems = [
	{
		kategory: "Cалаты",
		items: [
			"Греческий салат с оливками каламата",
			"Цезарь с куриной грудкой на гриле",
			"Цезарь с креветками",
			"Битый огурец и лосось сашими / гриль",
			"Тёплый салат с осьминогом",
			"Буратта с томатами и шпинатом",
		],
	},
	{
		kategory: "Рыба",
		items: [
			"Мидии в винном соусе",
			"Филе сибаса с цукини на гриле",
			"Стейк лосося на гриле / на пару",
			"Креветки на гриле со спайси соусом",
			"Жаренный рис с морепродуктами",
			"Бургер с крабом",
		],
	},
];

export function DeliveryPage() {
	return (
		<div className="delivery-page-wrapper">
			<div className="delivery-title-wrapper">
				<h1 className="delivery-title"> Меню доставки</h1>
			</div>
			<div className="delivery-items-wrapper">
				{deliveryItems[0].items.map((i) => {
					return <Card description={i} />;
				})}
				{deliveryItems[1].items.map((i) => {
					return <Card description={i} />;
				})}
			</div>
		</div>
	);
}
