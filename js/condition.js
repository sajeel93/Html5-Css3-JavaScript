var age = 25;
var score = 70;
// var score = prompt("What's your Score");
// score = parseInt(score);
var logicalValve = 5;

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

// Comparison Operators (==, ===(also check data type))
// Logical Operators (&&(And), ||(OR), !(Not))

// Conditions with Logical Operator
if (logicalValve > 4 && logicalValve < 6) {
    console.log(logicalValve);
    console.log(true);
} else {
    console.log("Error");
}

if (logicalValve > 3 || logicalValve <= 4) {
    console.log("Using ||(OR) Operator");
} else {
    console.log(Error);
}

