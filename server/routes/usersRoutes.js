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
        const usersData = utils.readUsers();
        let foundUser = usersData.find((user) => user.username === username);
        if(foundUser === undefined) {
            console.log("User not found");
            return res.status(400).send("Username invalid!");
        }
        console.log(foundUser);

        res.status(200).send("Login successful!");

});

module.exports = router;