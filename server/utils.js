const fs = require("fs");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

// Function to read parse and read JSON file
function readUsers() {
    const users = fs.readFileSync("server/assets/users.json");
    const parsedUsers = JSON.parse(users);
    return parsedUsers;
};

function writeUsers(newUser) {
    const stringifiedUsers = JSON.stringify(newUser);
    fs.writeFileSync("server/assets/users.json", stringifiedUsers);
};

module.exports = { readUsers };