import { useState } from "react";

const Header = () => {
	const [dropdown, setDropdown] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	return (
		<header>
			<nav className="bg-white shadow">
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							{/* <!-- Mobile menu button--> */}
							<button
								onClick={() => setShowMenu(!showMenu)}
								type="button"
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
								{/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
								<svg
									className="hidden h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex-shrink-0 flex items-center">
								<h4 className="text-4xl text-gray-700">SHOP</h4>
							</div>
							<div className="hidden sm:block sm:ml-6">
								<div className="flex space-x-4">
									{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
									<a
										href="#/"
										className="text-gray-600 hover:text-indigo-600 px-3 py-2 font-medium border-b-2 border-white hover:border-indigo-500"
										aria-current="page"
									>
										Shop
									</a>
								</div>
							</div>
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<button
								type="button"
								className="text-indigo-600 bg-white hover:bg-indigo-500 hover:text-white rounded-full p-2"
							>
								<span className="sr-only">
									View notifications
								</span>
								{/* <!-- Heroicon name: outline/bell --> */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
									/>
								</svg>
							</button>

							{/* <!-- Profile dropdown --> */}
							<div className="ml-3 relative">
								<div>
									<button
										onClick={() => setDropdown(!dropdown)}
										type="button"
										className="text-indigo-600 p-2 hover:bg-indigo-500 hover:text-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-500 focus:ring-white"
										id="user-menu-button"
										aria-expanded="false"
										aria-haspopup="true"
									>
										<span className="sr-only">
											Open user menu
										</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
											/>
										</svg>
									</button>
								</div>

								{dropdown && (
									<div
										className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="user-menu-button"
										tabIndex="-1"
									>
										{/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
										<a
											href="#/"
											className="block px-4 py-2 text-sm text-gray-700"
											role="menuitem"
											tabindex="-1"
											id="user-menu-item-0"
										>
											Your Profile
										</a>
										<a
											href="#/"
											className="block px-4 py-2 text-sm text-gray-700"
											role="menuitem"
											tabindex="-1"
											id="user-menu-item-1"
										>
											Settings
										</a>
										<a
											href="#/"
											className="block px-4 py-2 text-sm text-gray-700"
											role="menuitem"
											tabindex="-1"
											id="user-menu-item-2"
										>
											Sign out
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Mobile menu, show/hide based on menu state. --> */}
				{showMenu && (
					<div className="sm:hidden" id="mobile-menu">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
							<a
								href="#/"
								className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md font-medium"
								aria-current="page"
							>
								Shop
							</a>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
