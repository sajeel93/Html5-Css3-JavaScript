var age = 25;
var score = 70;
// var score = prompt("What's your Score");
// score = parseInt(score);

if(age >20) {
    console.log("If Condition " + age);
}
else {
    console.log("Else Condition " + age);
}

// with else if condition

if(score > 80){
    console.log("Grade A");
}
else if (score >= 70) {
    console.log("Grade B");
}
else if (score > 60) {
    console.log("Grade C");
}
else {
    console.log("Failed");
}

