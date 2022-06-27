const userForm = document.querySelector("form");

userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(username);
    console.log(password);

    if(!username || !password) {
        return console.log("All fields are required!");
    } console.log("Account Created!");
});