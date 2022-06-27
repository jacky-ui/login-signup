const userForm = document.querySelector("form");
console.log(userForm);

userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.password.value);
})