import "./menuPage.scss";
import MenuItem from "../../components/menuItem/menuItem";
function MenuPage() {
	const menuPageArr = [
		{
			name: "Детское меню",
			img: "https://sun9-9.userapi.com/impg/_AUWmSDAc4HWqE7lNp7JsNZLTpnwnO6P6cmsiQ/6PMNH904_Ho.jpg?size=1440x2160&quality=95&sign=6f56cbffde8345b663df5bb0532025e5&type=album",
			src: "https://vk.com/doc185718173_649274668?hash=znsEw38jeznycYcYbCp9mhv53mCfc2dKe8WFMdHnNgX&dl=DvCEZTMLi9SrfVZsUPfYDIHWT0zHnNGrsnSpu5sierP",
		},
		{
			name: "Основное меню",
			img: "https://sun9-20.userapi.com/impg/8P3ccJfrHBsB4GjiosKLwtLLXRu-jeQYO4dd0w/RP9zC5KHlrE.jpg?size=1440x2160&quality=95&sign=78761b658836d8d5abe7fdbceab4bb75&type=album",
			src: "https://vk.com/doc185718173_649274669?hash=E6wmKIbEOtSL9NwosH2sUBTTIAUAg491Yp6I1RYwBq8&dl=sdCaCORNDDaknxq54hBWRuVCYHYjztRTQ5gUY9Iktz0",
		},
		{
			name: "Вино",
			img: "https://sun9-17.userapi.com/impg/US6qPEA7J5z_gwo9iECtwiTiahIYH_bFJYFk7A/qWN4ANU-rFA.jpg?size=1440x2160&quality=95&sign=3f0d7d87541d5f3df4bee636afce05ab&type=album",
			src: "https://vk.com/doc185718173_649274667?hash=tBzTfxcOCeh2qlw5gHldRBqUm2o26oqgxeF8aU9t4cX&dl=dpNhKG94XI644yzx1XSUDdTezzG2zqhMDVDphkbzEYc",
		},
	];

	return (
		<div className="menu-page-wrapper">
			<div className="menu-page-flex">
				{menuPageArr.map((i, ind) => {
					return <MenuItem key={ind} name={i.name} img={i.img} src={i.src} />;
				})}
			</div>
		</div>
	);
}

export default MenuPage;
