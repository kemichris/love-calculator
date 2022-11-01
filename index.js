const formEl = document.getElementById("form");
const yourName = document.getElementById("yourName");
const loversName = document.getElementById("loversName");

let randomNumber = Math.ceil(Math.random() * 100);

formEl.addEventListener("submit",calculate)

function calculate() {
    const firstInput = yourName.value
    const secondInput = loversName.value

    if (randomNumber >= 50) {

        alert(firstInput + " and " + secondInput + ", you are like Romeo loves Juliet")

    }else {
        alert(firstInput + " and " + secondInput + ", Your match is not perfect, but you can improve.") 
    } 

    
    
}
