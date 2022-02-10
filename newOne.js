const input = document.querySelector("input");
const passwords = ["admin", "user"];
const messages = ["correct", "hello"];
const badMessage = "wrong password";

input.addEventListener("input", (e) =>{

    const text = e.target.value;
    document.querySelector('div').textContent=badMessage;
    
passwords.forEach(password, index) => {
    if (password === text) {
       console.log(password, index);
    }}})



