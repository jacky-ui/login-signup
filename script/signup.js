const userForm = document.querySelector("form");

userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(username);
    console.log(password);

    if(!username || !password) {
        const missingField = document.createElement("h2");
        missingField.innerText = "All fields are required!!";
        userForm.appendChild(missingField);


    } console.log("Account Created!");
});