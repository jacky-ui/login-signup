// Initialize and install require libraries
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// const { PORT } = process.env;
const usersRoutes = require("./routes/usersRoutes");
const PORT = process.env.PORT || 3000;
// Using cors and json files
app.use(cors());
app.use(express.json());
app.use(express.static("assets"));

// Routes for different requests
app.use("/", usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});