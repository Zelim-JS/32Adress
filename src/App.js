import "./App.css";
import { Routes, Route } from "react-router";
import Navbar from "./components/navbar/navbar";
import MainPage from "./pages/mainPage/mainPage";
import IconsBar from "./components/iconsBar/iconsBar";
import Footer from "./components/footer/footer";
import Booking from "./components/booking/booking";
import MenuPage from "./pages/menuPage/menuPage";
import Career from "./components/career/career";
import Contacts from "./pages/contacts/contacts";
import GalleryPage from "./pages/gallery/galleryPage";
import withMessage from "./common/hooks.js/withMessage";
import { DeliveryPage } from "./pages/deliveryPage/deliveryPage";

function App() {
	const BookPage = withMessage(Booking);
	const CareerPage = withMessage(Career);

	return (
		<div className="App">
			<div className="main">
				<Navbar />
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
