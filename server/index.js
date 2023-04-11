// Initialize and install require libraries
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// const { PORT } = process.env;
const config = {headers: {'Access-Control-Allow-Origin': '*'}};
const usersRoutes = require("./routes/usersRoutes");

const PORT = process.env.PORT || 3000;
// Using cors and json files
app.use(cors());
app.use(express.json());
app.use(express.static("assets"));

// Routes for different request
app.use("/", usersRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on PORT 5000");
});