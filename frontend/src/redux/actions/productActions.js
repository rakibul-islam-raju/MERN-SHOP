import * as actionTypes from "../constants/productConstants";
import axios from "axios";
import { BASE_URL } from "../../Utils";

export const getProducts = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

		const { data } = await axios.get(`${BASE_URL}/api/products`);

		dispatch({
			type: actionTypes.GET_PRODUCTS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			action: actionTypes.GET_PRODUCTS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

		const { data } = await axios.get(`${BASE_URL}/api/products/${id}`);

		console.log("from actions ===>", data);

		dispatch({
			type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			action: actionTypes.GET_PRODUCTS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getRemoveProductDetails = () => (dispatch) => {
	dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};
