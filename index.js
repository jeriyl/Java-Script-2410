console.log('Hello World!');

let fname = "Jerry";
let age = 29;
let maritalStatus = true;

console.log(fname, age, maritalStatus);

document.getElementById('p1').innerHTML = 'Hello ' + fname;
document.getElementById('p2').innerHTML = fname + " is " + age + " years old.";
document.getElementById('p3').innerHTML = fname + ' maritalStatus is ' + maritalStatus;

// window prompt : Input from user
/*
let username = window.prompt('What is your name?');
console.log('Window prompt message ' + username);
*/

document.getElementById('btn').onclick = function () {
    username = document.getElementById('name').value;
    console.log('Button clicked by ' + username);
    document.getElementById('p4').innerHTML = 'Hello ' + username;
}
