const fs = require("fs");

// Function to read parse and read JSON file
function readUsers() {
    const users = fs.readFileSync("server/assets/users.json");
    const parsedUsers = JSON.parse(users);
    return parsedUsers;
};

// Function to write users to JSON file
function writeUsers(newUser) {
    const stringifiedUsers = JSON.stringify(newUser);
    fs.writeFileSync("/tmp/users.json", stringifiedUsers);
};

module.exports = { readUsers, writeUsers };