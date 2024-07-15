// Activity 1: If-Else statememt
// Task 1 Write a program to check positive , negative and zero
const num = -10
if (num > 0) {
    console.log(num, " is Posotive");
} else if (num < 0) {
    console.log(num, " is Negative");
} else {
    console.log(num, " is Zero");
}

// Task 2 Write a program to check person is eligible to vote or not
const num1 = 10
if (num1 > 18) {
    console.log("Eligible for vote");
} else {
    console.log("Not eligible for vote");
}

// Activity 2: Nested If-Else statement
// Task 3 Write a program to find largets among three numbers
const a = 10
const b = 31
const c = 30
if (a > b && a > c) {
    console.log(a, " is grater than: ", b, " and ", c);
} else if (b > a && b > c) {
    console.log(b, " is grater than: ", a, " and ", c);
} else {
    console.log(c, " is grater than: ", a, " and ", b);
}

// Activity 3: Switch Case
// Task 4: Write a program that determine the day of a week 
const day = 5
switch (day) {
    case 1: {
        console.log(day, " Monday");
        break;
    }
    case 2: {
        console.log(day, " Tuesday");
        break;
    }
    case 3: {
        console.log(day, " Wednesday");
        break;
    }
    case 4: {
        console.log(day, " Thursday");
        break;
    }
    case 5: {
        console.log(day, " Friday");
        break;
    }
    case 6: {
        console.log(day, " Saturday");
        break;
    }
    default: {
        console.log(day, " Sunday");
        break;
    }
}

// Task 5: Write a program that assign grades
var marks = 60
var grade;
switch (true) {
    case (marks >= 80): {
        grade = "A"
        break;
    }
    case (marks < 80 && marks >= 60): {
        grade = "B"
        break;
    }
    case (marks < 60 && marks > 45): {
        grade = "C"
        break;
    }
    case (marks <= 45 && marks >= 33): {
        grade = "D"
        break;
    }
    default: {
        grade = "F"
        break;
    }
}
console.log(grade);

// Activity 4: Conditional Ternary operator
// Task 6: Even Odd checking using ternary 
let number = 12
console.log(number % 2 === 0 ? "Even" : "Odd");

// Activity 5: Combining conditions
//  Task 7: Leap year program
let year = 2168
if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year, " is a Leap year");
} else {
    console.log(year, " is Not a leap year");
}