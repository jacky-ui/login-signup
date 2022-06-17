// Initialize and install require libraries
const express = require("express");
const app = express();
require("dotenv").config();
const { PORT } = process.env;
const usersRoutes = require("./routes/usersRoutes");

// Routes for different requests
app.use("/", usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});