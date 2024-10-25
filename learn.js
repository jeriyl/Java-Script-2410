console.log("Hello");
message = "Welcome "

document.getElementById("p1").innerHTML = "Good Morning";

document.getElementById("btn").onclick = function () {
    username = document.getElementById("name").value;
    document.getElementById("p2").innerHTML = message + username;
}


//Math functions in JS
//Basic
/*
let a = window.prompt("Enter A: ")
let b = window.prompt("Enter B: ")
c = Math.sqrt((a ** 2) + (b ** 2))

console.log("Hypotenuse", c)
*/
document.getElementById("res").onclick = function () {

    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    Result = Math.sqrt((a ** 2) + (b ** 2))
    document.getElementById("p3").innerHTML = Result
}

//Counter Program

let count = 0;

document.getElementById("de").onclick = function () {
    count = count - 1
    document.getElementById("num").innerHTML = count
}

document.getElementById("in").onclick = function () {
    count += 1
    document.getElementById("num").innerHTML = count
}

document.getElementById("re").onclick = function () {
    count = 0
    document.getElementById("num").innerHTML = count
}

//Random Number Generator

document.getElementById("roll").onclick = function () {
    let x1 = Math.floor(Math.random() * 6 + 1)
    let y1 = Math.floor(Math.random() * 6 + 1)
    document.getElementById("x1").innerHTML = x1;
    document.getElementById("y1").innerHTML = y1;

}

let username = "Jaziel Daniel"
caps = username.toUpperCase()
document.getElementById("p4").innerHTML = caps

//SLICE OPERATOR
fname = username.slice(0, username.indexOf(" "))
lname = username.slice(username.indexOf(" ") + 1)
console.log(fname)
console.log(lname)

//IF Else --Checkbox and Radio Button example

document.getElementById("btn11").onclick = function () {
    checkbox = document.getElementById("cb")

    visabutton = document.getElementById("visa")
    masterbutton = document.getElementById("master")
    paypalbutton = document.getElementById("paypal")

    if (checkbox.checked) {
        console.log("You are subscribed!");
    }
    else {
        console.log("You are not subscribed!")
    }
    if (visabutton.checked) {
        console.log("You made payment using Visa!")
    }
    else if (masterbutton.checked) {
        console.log("You made payment using Master Card!")
    }
    else if (paypalbutton.checked) {
        console.log("You made payment using Paypal!")
    }
    else {
        console.log("You must make the payment")
    }

}

//Switch case - alternative to many if else statements

let grade = "B"

switch (grade) {
    case "A": console.log("Great"); break;
    case "B": console.log("Good"); break;
    case "F": console.log("Fail"); break;
    default: console.log("Not Valid Grade");
}
3
//nested loop
/*
document.getElementById("p5").innerHTML="Shape Rectangle";
let rows = window.prompt("Enter the rows: ")
let col = window.prompt("Enter the column: ")
let symbol = window.prompt("Enter the symbol: ")
for (i = 1; i <= rows; i += 1) {
    for (j = 1; j <= col; j += 1) {
        document.getElementById("myrectangle").innerHTML += symbol;
    }
    document.getElementById("myrectangle").innerHTML += "<br>";
}
*/
const answer = Math.floor(Math.random() * 10 + 1);
let counter = 0;
document.getElementById("gbtn").onclick = function () {

    let guess = document.getElementById("guessednum").value
    counter += 1;

    if (guess == answer) {
        alert(`Your guesses number is ${guess}, It took ${counter} chances to guess`)
    }
    else if (guess < answer) {
        alert(`Too small number`)
    }
    else if (guess > number) {
        alert(`Too big number`)
    }




}


