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

let count=0;

document.getElementById("de").onclick = function () {
    count = count-1
    document.getElementById("num").innerHTML = count
}

document.getElementById("in").onclick = function () {
    count += 1
    document.getElementById("num").innerHTML = count
}

document.getElementById("re").onclick = function () {
    count=0
    document.getElementById("num").innerHTML = count
}