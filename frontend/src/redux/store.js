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

const INITIAL_STATE = {
	cart: {
		cartItems: cartFormLocalStorage,
	},
};

const store = createStore(
	reducers,
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
