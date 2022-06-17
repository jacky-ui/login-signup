console.log(sessionStorage.token);
const sectionElement = document.querySelector(".main");

let token = sessionStorage.token;

if (token === undefined) {
    console.log("Please present proof");

    const header = document.createElement("h1");
    header.innerText = "Please login to view page";
    sectionElement.appendChild(header);
    console.log(sectionElement);

}   else {
    console.log("Continue Please");
}