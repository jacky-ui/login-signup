// Initialize and install require libraries
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;
const usersRoutes = require("./routes/usersRoutes");

app.use(cors());

// Routes for different requests
app.use("/", usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});