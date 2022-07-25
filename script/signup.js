const userForm = document.querySelector("form");

function createTag(tag, text, className) {
    let element = document.createElement(tag);
    element.innerText = text;
    element.classList.add(className);
    userForm.append(element);
};

// Initialize and declare this variable to check if error message from sign up already exists.
let duplicateMessageCheck = 0;

userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    if((!username || !password) && duplicateMessageCheck === 0) {
        createTag("h2", "All fields are required!!", "form__message");
        duplicateMessageCheck = 1;
        
    } else {
        axios
            .post("http://localhost:8080/signup", {
                "username": username,
                "password": password,
            })
            .then((res) => {
                createTag("h2", res.response.data, "form__message");
            })
            .catch((err) => {
                createTag("h2", err.response.data, "form__message");
            });
    } 
});