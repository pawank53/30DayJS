// Activity 1: Function Declaration
// Task 1: Even/Odd
const evenOdd=(n)=>{
    if(n%2===0){
        console.log(n, " is Even");
    }else{
        console.log(n, " is Odd");
    }
}
evenOdd(11);

// Task 2: find square
const findSquare=(n)=>{
    console.log(`Square of ${n} is ${n*n}`);
}
findSquare(3);

// Activity 2: Function Expression
// Task 3: Maximum of two numbers 
function max(a ,b){
    if(a>b){
        console.log(`${a} is greater than ${b}`);
    }else{
        console.log(`${b} is greater than ${a}`);
    }
}
max(10, 4);

// Task 4: String Concatination
function concatString(str1, str2){
    let c=str1.concat(str2);
    console.log(`${str1} and ${str2}:${c}`);
}
concatString("Pawan", "Kumar");

// Activity 3: Arrow functions
// Task 5: Sum of two numbers
const sum=(a, b)=> console.log(`${a}+${b}=${a+b}`); 
sum(12, 11);

// Task 6: String contains a specific char or not
const checkChar=(str, char)=> {
    if(str.includes(char)){
        return true
    }else{
        return false;
    }
}
console.log(checkChar("Pawan", 'w'));

// Activity 4: Function Parameters and Default Value
// Task 7: 
const findProduct=(a, b=4)=> console.log(`${a}*${b}=${a*b}`);
findProduct(5);

// Task 8: 
const greetings=(name, age=23)=>console.log(`Hello ${name}, you are now ${age} years old!`); 
greetings("Pawan");

// Activity 5: High Order Function
// Task 9: write a higher-order function in JavaScript that takes a function and a number and call the function that many times
function sayHello(){
    console.log("Hello");
}
function callFun(fun, n){
    while(n>0){
        fun()
        n--;
    }
}
callFun(sayHello, 5)

// Task 10: write a higher-order function in JavaScript that takes two functions and a value, applies the first function to the value, and then applies the second function to the result:
function mainFun(fun1, fun2, value){
    const res=fun1(value);
    const ans=fun2(res);
    return ans;
}
const add=(a)=> a+10;
const mul=(b)=> b*2;
console.log(mainFun(add, mul, 2));