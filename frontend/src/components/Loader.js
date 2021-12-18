import Spinner from "../Assets/spinner.svg";

const Loader = () => {
	return (
		<div className="flex justify-center my-4">
			<img src={Spinner} alt="Loading..." />
		</div>
	);
};

export default Loader;
