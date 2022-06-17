const userInput = document.querySelector("form");

userInput.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(username, password);

    if (!username || !password) {
        console.log("Please fill in all fields");
        const missingField = document.createElement("h2");
        missingField.innerText = "All fields are required";
        userInput.appendChild(missingField);
    }   else {
        console.log("Success");
    }
})