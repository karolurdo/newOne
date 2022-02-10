const input = document.querySelector("input");
const passwords = ["admin", "user"];
const messages = ["correct", "hello"];
const badMessage = "wronge password"; 


const showMessage = (e) => {
    document.querySelector("div").textContent = badMessage;
    passwords.forEach((item, index) => {
        if (item.toLowerCase() === e.target.value.toLowerCase()){ //dont check Lower Upper Case
            //console.log("work");
            document.querySelector("div").textContent = messages[index]; // show message
            
        }
    })
}


input.addEventListener("input", showMessage);

//FOCUS
input.addEventListener('focus', (e) => { //change backgroud color when write password
    e.target.classList.add('active');
    });
   
   //BLUR
   input.addEventListener('blur', (e) => { 
   e.target.classList.remove('active');
   });