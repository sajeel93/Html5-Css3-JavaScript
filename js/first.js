// alert("Welcome to JS Land... \n Happy Coding!")

console.log("Hello World!");
// console.log(3+6);

var a = 3
var b = 6
var c = 9

a++
console.log(a);
a--
console.log(a);
++b
console.log(b);
--b
console.log(b);
-+c
console.log(c);
c = a++ - b;
console.log(c);

function first() {
    var name = "Sajeel Siddiqui";
    var age = "27 year old";
    var course = "Cloud Native Computing";

    alert(name);
    alert(age);
    alert(course);
}

function email() {
    var email = "sajeel.ahmed786@gmail.com"

    alert("My Email is" + " " + email);
    
}

function dwrite() {

    var html = "HTML5";
    document.write("Yah! I can write " + html + " content through JavaScript <br><br>");

    document.write("Please Refresh for Home Page!!");
}

function prompt123() {
    var name = prompt("What is you Name??");
    console.log(name);
    // document.write(name);
}
function promptNumber() {
    var no1 = 5
    var no2 = prompt("What's your Age ?");
    var no2ForNumbers = parseInt(no2);
    var result = no1 + no2;
    var result2 = no1 + no2ForNumbers;
    var age = "I'm " + no2ForNumbers + " years old";
    console.log(result);
    console.log(result2);
    console.log(age)


}
