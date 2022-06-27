const userForm = document.querySelector("form");
console.log(userForm);

userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(username);
    console.log(password);
})