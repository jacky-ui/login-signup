const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const utils = require("../utils");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = process.env;
const bcrypt = require("bcrypt");
const uniqid = require("uniqid");

router.use(express.json());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
  }));

//   Route to hadle user sign up
router.post("/signup", (req, res) => {
    const { username, password } = req.body

    if(!username || !password) {
        return res.status(400).send("Please enter in all fields!");
    }   
        else if (username === password) {

            return res.status(400).send("Username and Password must not be the same!");
        }
        const hashedPassword = bcrypt.hashSync(password, 12);

        const newUser = {
            "id": uniqid(),
            "username": username, 
            "password": hashedPassword,
        };

        const usersData = utils.readUsers();
        usersData.push(newUser);
        utils.writeUsers(usersData);
});

// Route to handle user login
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