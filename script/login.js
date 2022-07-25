const userInput = document.querySelector("form");

function createMessage(tag, text, className) {
    let element = document.createElement(tag);
    element.innerText = text;
    element.classList.add(className);
    userInput.appendChild(element);
};

// Initialize and declare this variable to check if error message from sign up already exists.
let duplicateMessageCheck = 0;

userInput.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    if ((!username || !password) && duplicateMessageCheck === 0) {

        createMessage("h2", "All fields are required", "form__message");
        duplicateMessageCheck = 1;
    }   
        else {
            axios
                .post("http://localhost:8080/login", {
                    "username": username,
                    "password": password,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((res) => {
                    console.log(duplicateMessageCheck);
                    duplicateMessageCheck === 0 ? createMessage("h2", res.response.data, "form__message"): " ";
                    duplicateMessageCheck = 1;
                })
        }
});