const input = document.querySelector("input");
const passwords = ["admin", "user"];
const messages = ["correct", "hello"];

const showMessage = (e) => {
    passwords.forEach((item) => {
        if (item.toLowerCase() === e.target.value.toLowerCase()){ //dont check Lower Upper Case
            console.log("work");
        }
    })
}


input.addEventListener("input", showMessage);
