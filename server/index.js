// Initialize and install require libraries
const express = require("express");
const app = express();
require("dotenv").config();
const { PORT } = process.env;
const 


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});