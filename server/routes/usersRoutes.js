const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const utils = require("../utils");

router.use(express.json());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
  }));

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).send("Please enter in all fields!");
    }
        else {
            const usersData = utils.readUsers();
            console.log(usersData);
            res.status(200).send("Login successful!");
        }
});

module.exports = router;