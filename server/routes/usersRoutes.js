const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const utils = require("../utils");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = process.env;

router.use(express.json());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
  }));

router.post("/signup", (req, res) => {
    console.log(req.body);
})

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
        const token = jwt.sign (
            { id: foundUser.id, user: foundUser.username },
            JWT_KEY,
            {expiresIn: "24h"}
        );
        console.log(token);
        // Will have to function to check if bcrypt password matches entered password
        // But first have to create sign up so testing user will begin with crypt password

        res.status(200).send("Login successful!");

});

module.exports = router;