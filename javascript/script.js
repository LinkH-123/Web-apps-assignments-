function setGreeting() {
    let now = new Date();//built in class in javascript
    console.log("I am printing time now: " + now.getHours());

    let hours = now.getHours();

    //Good morning - < 12
    //Good afternoon - 12 to 18
    //Good night - 18 to 24

    if (hours < 12) {
        console.log("Good morning");
    }
    else if (hours >= 12 && hours < 18) {
        console.log("Good afternoon");
    }
    else {
        console.log("Good night");
    }

    
    document.getElementById("greetingOutput").textContent = greeting;
    
}

window.onload = function () {
    setGreeting();
}

function setButtonText() {
    document.getElementById("buttonClickText").textContent = "The time right now is " + new Date().toLocaleTimeString();
}

function findSum() {
    
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    
    let sum = parseFloat(num1) + parseFloat(num2);
  
        document.getElementById("sumOutput").textContent = sum;
    
}

function getStringLength() {
    let text = document.getElementById("entry").value; // Get the value of the input field with id "entry"
    let length = text.length; // Get the length of the string

    document.getElementById("stringLengthOutput").textContent = length; // Display the length in the element with id "stringLengthOutput"
}

function togglePassword(){
    let passwordInput = document.getElementById("Password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}