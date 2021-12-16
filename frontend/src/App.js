import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
	const [showCart, setShowCart] = useState(false);
	return (
		<div className="App">
			<BrowserRouter>
				<Header showCart={showCart} setShowCart={setShowCart} />
				<Cart showCart={showCart} setShowCart={setShowCart} />
				<main className="container">
					<Routes>
						<Route path="" element={<HomePage />} />
						<Route
							path="product/:productId"
							element={<ProductPage />}
						/>
						<Route path="cart" element={<CartPage />} />
						<Route path="shop" element={<ShopPage />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
