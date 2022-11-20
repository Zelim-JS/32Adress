import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/header/header";
import MainPage from "./pages/mainPage/mainPage";
import IconsBar from "./components/iconsBar/iconsBar";
import Footer from "./components/footer/footer";
import BookPage from "./pages/book/bookPage";
import MenuPage from "./pages/menuPage/menuPage";
import CareerPage from "./pages/careerPage/careerPage";
import Contacts from "./pages/contacts/contacts";
import GalleryPage from "./pages/gallery/galleryPage";
import { DeliveryPage } from "./pages/deliveryPage/deliveryPage";

function App() {
	return (
		<div className="App">
			<div className="main">
				<Header />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/booking" element={<BookPage />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/delivery" element={<DeliveryPage />} />
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
