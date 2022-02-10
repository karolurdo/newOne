const input = document.querySelector("input");
const passwords = ["admin", "user"];
const messages = ["correct", "hello"];

const showMessage = (e) => {
    passwords.forEach((item, index) => {
        if (item.toLowerCase() === e.target.value.toLowerCase()){ //dont check Lower Upper Case
            //console.log("work");
            document.querySelector("div").textContent = messages[index]; // show message
        }
    })
}


input.addEventListener("input", showMessage);
