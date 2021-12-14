require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/ProductRoutes");

connectDB();

const app = express();
// middleware
app.use(express.json());

// routes
app.use("./api/products", productRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
