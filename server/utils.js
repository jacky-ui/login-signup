// const fs = require("fs");
// const AWS = require("aws-sdk");
// const s3 = new AWS.S3();

// Function to read parse and read JSON file
// function readUsers() {
//     // const users = fs.readFileSync("server/assets/users.json");
//     // const parsedUsers = JSON.parse(users);
//     const my_file = s3.getObject({
//         Bucket: "cyclic-byzantium-cockatoo-hose-ap-south-1",
//         Key: "server/assets/users.json",
//     })
//     return JSON.parse(my_file);
// };

// Function to write users to JSON file
// function writeUsers(newUser) {
//     const stringifiedUsers = JSON.stringify(newUser);
//     s3.writeFileSync("server/assets/users.json", stringifiedUsers);
// };
// function writeUsers(newUser) {
//     const stringifiedUsers = JSON.stringify(newUser);
//     fs.writeFileSync("server/assets/users.json", stringifiedUsers);
// };

// module.exports = { readUsers };