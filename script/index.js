// Grab section tag from html body
const sectionElement = document.querySelector(".main");

// Declare and assign token from sessionStorage to variable
let token = sessionStorage.getItem(1);

// Decode JWT for Username
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

// Might make function here to create and append to sectionElement

// Depending on status of token, different things will render on page
if (token === (undefined || null)) {
    console.error("Please present proof");

    const header = document.createElement("h1");
    header.innerText = "Please login to view page";

    const loginLink = document.createElement("a");
    loginLink.setAttribute("href", "./pages/login.html");
    loginLink.innerText = "Click here to login!";

    sectionElement.appendChild(header);
    sectionElement.appendChild(loginLink);

}   else {
    console.log("Continue Please");
    let parsedToken = parseJwt(token);
    let username = parsedToken.user;
    const headElement = document.createElement("h1");
    headElement.innerText = `Welcome ${username} to your dashboard!`;
    sectionElement.appendChild(headElement);
}