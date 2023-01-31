const userInput = document.querySelector("form");
let errorMessageContain = document.querySelector("#form__error");

function createMessage(tag, text, className) {
    let element = document.createElement(tag);
    element.innerText = text;
    element.classList.add(className);
    errorMessageContain.appendChild(element);
};

userInput.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    if ((!username || !password)) {
        errorMessageContain.innerHTML = " ";
        createMessage("h2", "All fields are required", "form__message");
    }   
        else {
            axios
                .post("http://localhost:8080/login", {
                    "username": username,
                    "password": password,
                })
                .then((res) => {
                    console.log(res.data.token);
                    window.location.replace("https://www.google.com/");
                })
                .catch((res) => {
                    console.log(res.response.data)
                    duplicateMessageCheck === 0 ? createMessage("h2", res.response.data, "form__message"): " ";
                    duplicateMessageCheck = 1;
                })
        }
});