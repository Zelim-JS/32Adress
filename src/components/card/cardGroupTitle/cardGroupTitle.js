import React from "react";

export function CardGroupTitle({ title = "Салаты" }) {
	return (
		<div className="delivery-subtitle-container">
			<h2 className="delivery-subtitle">{title}</h2>
		</div>
	);
}
