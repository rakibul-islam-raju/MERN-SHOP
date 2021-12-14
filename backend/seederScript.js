require("dotenv").config();

const productData = require("./data/products");
const connentDB = require("./config/db");
const Product = require("./models/Product");
const connectDB = require("./config/db");

connectDB();

const importData = async () => {
	try {
		await Product.deleteMany({});

		await Product.insertMany(productData);

		console.log("data inserted.");

		process.exit();
	} catch (error) {
		console.error("error with data insertation.");
		process.exit(1);
	}
};

importData();
