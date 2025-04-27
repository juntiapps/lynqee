require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Import cors
const dotenv = require("dotenv");
const db = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();

// dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
