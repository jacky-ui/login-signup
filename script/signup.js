const userForm = document.querySelector("form");
let errorMessageContain = document.querySelector("#form__error");

function createTag(tag, text, className) {
    let element = document.createElement(tag);
    element.innerText = text;
    element.classList.add(className);
    errorMessageContain.append(element);
};

userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    if((!username || !password)) {
        errorMessageContain.innerHTML = " ";
        createTag("h2", "All fields are required!!", "form__message");
    } else {
        axios
            .post("https://byzantium-cockatoo-hose.cyclic.app/signup", {
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