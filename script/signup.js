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

    } else {
        axios
            .post("http://localhost:8080/signup", {
                "username": username,
                "password": password,
            })
            .then((res) => {
                const accountCreated = document.createElement("h2");
                accountCreated.innerText = res.response.data;
                accountCreated.classList.add("form__message");
                userForm.appendChild(accountCreated);
            })
            .catch((err) => {
                const sameCredentials = document.createElement("h2");
                sameCredentials.innerText = err.response.data;
                sameCredentials.classList.add("form__message");
                userForm.appendChild(sameCredentials);
            });
    } 
});