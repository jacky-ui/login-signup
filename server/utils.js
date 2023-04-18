const fs = require("fs");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

// Function to read parse and read JSON file
function readUsers() {
    const users = fs.readFileSync("server/assets/users.json");
    const parsedUsers = JSON.parse(users);
    return parsedUsers;
};

// Function to write users to JSON file
// function writeUsers(newUser) {
//     const stringifiedUsers = JSON.stringify(newUser);
//     s3.writeFileSync("server/assets/users.json", stringifiedUsers);
// };
// function writeUsers(newUser) {
//     const stringifiedUsers = JSON.stringify(newUser);
//     fs.writeFileSync("server/assets/users.json", stringifiedUsers);
// };

module.exports = { readUsers, writeUsers };