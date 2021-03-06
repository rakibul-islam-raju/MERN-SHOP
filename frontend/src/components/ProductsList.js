import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// actions
import { getProducts as listProducts } from "../redux/actions/productActions";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const ProductsList = () => {
	const dispatch = useDispatch();

	const getProducts = useSelector((state) => state.getProducts);
	const { products, loading, error } = getProducts;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<>
			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>

				{loading ? (
					<Loader />
				) : error ? (
					<ErrorMessage text="Error message" />
				) : (
					<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{products.map((product) => (
							<Link
								key={product._id}
								to={`product/${product._id}`}
								className="group"
							>
								<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
									<img
										src={product.imageUrl}
										alt={product.name}
										className="w-full h-full object-center object-cover group-hover:opacity-75"
									/>
								</div>
								<h3 className="mt-4 text-sm text-gray-700">
									{product.name}
								</h3>
								<p className="mt-1 text-lg font-medium text-gray-900">
									$ {product.price}
								</p>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default ProductsList;
