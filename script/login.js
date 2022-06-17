const userInput = document.querySelector("form");

userInput.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(username, password);

    if (!username || !password) {
        console.log("Please fill in all fields");
    }   else {
        console.log("Success");
    }
})