const fs = require("fs");

// Function to read parse and read JSON file
function readUsers() {
    const users = fs.readFileSync("./assets/users.json");
    const parsedUsers = JSON.parse(users);
    return parsedUsers;
};

module.exports = { readUsers };