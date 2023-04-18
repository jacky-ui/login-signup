const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const utils = require("../utils");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;
const bcrypt = require("bcrypt");
const uniqid = require("uniqid");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

router.use(express.json());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
  }));

//   Route to handle user sign up
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

        s3.putObject({
            Body: JSON.stringify({key:newUser}),
            Bucket: "cyclic-byzantium-cockatoo-hose-ap-south-1",
            Key: "server/assets/users.json",
        });
        // const usersData = utils.readUsers();
        // usersData.push(newUser);
        // utils.writeUsers(usersData);
        console.log('Account created');
        return res.status(200).send("Account created!");
});

// Route to handle user login
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).send("Please enter in all fields!");
    }
        // const usersData = utils.readUsers();
        let my_file = s3.getObject({
            Bucket: "cyclic-byzantium-cockatoo-hose-ap-south-1",
            Key: "server/assets/users.json",
        });
        // let usersData = [];
        // usersData.push(my_file.data)
        console.log(my_file);
        // console.log(typeof(usersData));
        let foundUser = usersData.find((user) => user.username === username);
        // console.log(usersData);

        if(foundUser === undefined) {
            return res.status(400).send("Username invalid!");
        }

        const comparedPassword = bcrypt.compareSync(password, foundUser.password);

        if(!comparedPassword) {
            return res.status(400).send("Password invalid!");
        }
        const token = jwt.sign (
            { id: foundUser.id, user: foundUser.username },
            JWT_KEY,
            {expiresIn: "1h"}
        );
        // Will have to function to check if bcrypt password matches entered password
        // But first have to create sign up so testing user will begin with crypt password
        res.json({ token });
});

module.exports = router;