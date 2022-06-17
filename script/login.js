const userInput = document.querySelector("form");

userInput.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.username.value;
    console.log(username, password);
})