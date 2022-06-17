console.log(sessionStorage);

console.log(sessionStorage.token);

let token = sessionStorage.token;
token = "fdsfdsfasdf";

if (token === undefined) {
    console.log("Please present proof");
}   else {
    console.log("Continue Please");
}