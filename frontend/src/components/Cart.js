import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// tailwind UI
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
// actions
import { removeFromCart, addToCart } from "../redux/actions/cartActions";

const Cart = ({ showCart, setShowCart }) => {
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const qtyChangeHandler = (id, qty) => {
		dispatch(addToCart(id, qty));
	};

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const getSubTotal = () => {
		return cartItems.reduce(
			(price, item) => item.price * item.qty + price,
			0
		);
	};

	return (
		<Transition.Root show={showCart} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 overflow-hidden"
				onClose={setShowCart}
			>
				<div className="absolute inset-0 overflow-hidden">
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
						<Transition.Child
							as={Fragment}
							enter="transform transition ease-in-out duration-500 sm:duration-700"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="transform transition ease-in-out duration-500 sm:duration-700"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full"
						>
							<div className="w-screen max-w-md">
								<div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
									<div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
										<div className="flex items-start justify-between">
											<Dialog.Title className="text-lg font-medium text-gray-900">
												Shopping cart
											</Dialog.Title>
											<div className="ml-3 h-7 flex items-center">
												<button
													type="button"
													className="-m-2 p-2 text-gray-400 hover:text-gray-500"
													onClick={() =>
														setShowCart(false)
													}
												>
													<span className="sr-only">
														Close panel
													</span>
													<XIcon
														className="h-6 w-6"
														aria-hidden="true"
													/>
												</button>
											</div>
										</div>

										<div className="mt-8">
											<div className="flow-root">
												<ul className="-my-6 divide-y divide-gray-200">
													{cartItems.length === 0 ? (
														<h4>
															Your cart is
															empty!!!
														</h4>
													) : (
														cartItems.map(
															(item) => (
																<li
																	key={
																		item.product
																	}
																	className="py-6 flex"
																>
																	<div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
																		<img
																			src={
																				item.imageUrl
																			}
																			alt={
																				item.name
																			}
																			className="w-full h-full object-center object-cover"
																		/>
																	</div>

																	<div className="ml-4 flex-1 flex flex-col">
																		<div>
																			<div className="flex justify-between text-base font-medium text-gray-900">
																				<h3>
																					<Link
																						to={`product/${item.product}`}
																					>
																						{
																							item.name
																						}
																					</Link>
																				</h3>
																				<p className="ml-4">
																					${" "}
																					{
																						item.price
																					}
																				</p>
																			</div>
																		</div>
																		<div className="flex-1 flex items-end justify-between text-sm">
																			<p className="text-gray-500">
																				Qty{" "}
																				<input
																					onChange={(
																						e
																					) =>
																						qtyChangeHandler(
																							item.product,
																							e
																								.target
																								.value
																						)
																					}
																					className="w-24 p-1 ml-2 border bg-gray-100 rounded"
																					value={
																						item.qty
																					}
																					type="number"
																					min={
																						1
																					}
																				/>
																			</p>

																			<div className="flex">
																				<button
																					onClick={() =>
																						removeFromCartHandler(
																							item.product
																						)
																					}
																					type="button"
																					className="font-medium text-red-600 hover:text-red-500"
																				>
																					Remove
																				</button>
																			</div>
																		</div>
																	</div>
																</li>
															)
														)
													)}
												</ul>
											</div>
										</div>
									</div>

									<div className="border-t border-gray-200 py-6 px-4 sm:px-6">
										<div className="flex justify-between text-base font-medium text-gray-900">
											<p>Subtotal</p>
											<p>$ {getSubTotal().toFixed(2)}</p>
										</div>
										<p className="mt-0.5 text-sm text-gray-500">
											Shipping and taxes calculated at
											checkout.
										</p>
										<div className="mt-6">
											<a
												href="#/"
												className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
											>
												Checkout
											</a>
										</div>
										<div className="mt-6 flex justify-center text-sm text-center text-gray-500">
											<p>
												or{" "}
												<Link
													to="/"
													className="text-indigo-600 font-medium hover:text-indigo-500"
													onClick={() =>
														setShowCart(false)
													}
												>
													Continue Shopping
													<span aria-hidden="true">
														{" "}
														&rarr;
													</span>
												</Link>
											</p>
										</div>
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Cart;
