import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// reducers
import { cartReducer } from "./reducers/cartReducers";
import {
	getProductReducer,
	getProductDetailReducer,
} from "./reducers/productReducers";

const reducers = combineReducers({
	cart: cartReducer,
	getProducts: getProductReducer,
	getProductDetails: getProductDetailReducer,
});

const middleware = [thunk];

const cartFormLocalStorage = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: [];

const INITIAL_VALUES = {
	cart: {
		cartItems: cartFormLocalStorage,
	},
};

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
