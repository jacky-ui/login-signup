const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
  }));

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    res.status(200).send("Login successful!");
})

module.exports = router;