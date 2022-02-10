const input = document.querySelector("input");
const passwords = ["admin", "user"];
const messages = ["correct", "hello"];

const showMessage = (e) => {
    const text = e.target.value; 
    console.log(text); 

};

input.addEventListener("input", showMessage);
