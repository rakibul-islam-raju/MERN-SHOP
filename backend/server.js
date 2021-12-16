require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/ProductRoutes");

connectDB();

const app = express();
// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
	res.send("hello World!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
