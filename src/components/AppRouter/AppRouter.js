import {Route, Routes} from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Cart from "../Cart/Cart";
import CheckoutCart from "../CheckoutCart/CheckoutCart";

const AppRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<ItemListContainer
						greeting="Todos nuestros productos"
						isHome="true"
					/>
				}
			/>
			<Route
				path="/category/:categoryId"
				element={<ItemListContainer greeting="Productos filtrados" />}
			/>
			<Route path="/detail/:productId" element={<ItemDetailContainer />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/checkout" element={<CheckoutCart />} />
		</Routes>
	);
};

export default AppRouter;
