const userInput = document.querySelector("form");

userInput.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    if (!username || !password) {

        const missingField = document.createElement("h2");
        missingField.innerText = "All fields are required";
        userInput.appendChild(missingField);
    }   
        else {
            console.log("Success");
            console.log(username, password);
            axios
                .post("http://localhost:8080/login", {
                    "username": username,
                    "password": password,
                })
                .then((response) => {
                    console.log(response);
                })
        }
});