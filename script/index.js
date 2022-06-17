// Grab section tag from html body
const sectionElement = document.querySelector(".main");

// Declare and assign token from sessionStorage to variable
let token = sessionStorage.token;

// Might make function here to create and append to sectionElement

// Depending on status of token, different things will render on page
if (token === undefined) {
    console.log("Please present proof");

    const header = document.createElement("h1");
    header.innerText = "Please login to view page";

    const loginLink = document.createElement("a");
    loginLink.setAttribute("href", "./pages/login.html");
    loginLink.innerText = "Click here to login!";

    sectionElement.appendChild(header);
    sectionElement.appendChild(loginLink);

}   else {
    console.log("Continue Please");
}