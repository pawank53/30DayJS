// Activity 1: For Loop
// Task 1: Print 1 to 10 using for loop
const print=(a, b)=>{
    for(let i=a;i<=b;i++){
        console.log(i);
    }
}
print(1, 10);
console.log("Task: 2");
// Task 2: Table of 5
const table=(n)=>{
    for(let i=1;i<=10;i++){
        console.log(i*n);
    }
}
table(5);

console.log("Task 3");
// Activity 2: While Loop
// Task 3: Sum of the numbers from 1 to 10

const sumFrom=(a, n)=>{
    let sum=0;
    while(n>=a){
        sum=sum+n;
        n--;
    }
    return sum;
}
console.log("Sum:", sumFrom(1, 10));
console.log("Task 4");

// Task 4: Print in reverse
const printReverse=(n, a)=>{
    while(n>=a){
        console.log(n);
        n--;
    }
}
printReverse(10, 1);
console.log("Task 5");

// Activity 3: Do.. While Loop
// Task 5: print from 1 to 10
const printDoWhile=(a, b)=>{
    do{
        console.log(a);
        a++;
    }while(a<=b);
}
printDoWhile(1, 5);
console.log("Task 6");

// Task 6: Factorial
const factorial=(n)=>{
    let i=1;
    do{
        i=i*n;
        n--;
    }while(n>=1);
    console.log(i);
}
factorial(4);
console.log("Task 7");
// Activity 4: Nested Loops
// Task 7: Star pattern
for(let i=0;i<5;i++){
    let star='*'
    for(let j=0;j<i;j++){
        star+='*'
    }
    console.log(star);
}
console.log("Task 8");

// Activity 5: Loop Control Statement
// Task 8: Skip 5 
for(let i=1;i<=10;i++){
    if(i===5){
        continue;
    }
    console.log(i);
}
console.log("Task 9");

// Task 9: Stop when 7
for(let i=1;i<=10;i++){
    if(i===7){
        break;
    }
    console.log(i);
}