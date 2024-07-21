// Activity 1: Template literals
// Task 1: Use template literals to Create a String that includes variables for a person's name, age. Then log the string to the console.

const name="XYZ"
const age=100
console.log(`My name is ${name} and my age is ${age}`);

// Task 2 : Create a multi line string using template literals. Then log the string to the console.
const str=`My name is XYZ
and  I am 100 years old.`
console.log("Multiline Literal:", str);

// Activity 2: Destructuring
// Task 3: Use Array destructing to extract the first and second value from the array of numbers  and log to the console.
const arr=[1, 2 ,3, 4, 5]
let [first, second]=arr
console.log("First Element:", first);

// Task 4 : Use Object destructing to extract the title and author from the object and log them to the console.
const book={
    title:"Think like a monk",
    author:"Jay Shetty",
    year:2017
}
let {title, author}=book;
console.log(`Title is :${title} and Author is :${author}`);

// Activity 3: Spread Operator and Rest operators
// Task 5: Use the spread operator to create new array that includes all element of an existing array and add an additional element to the new array. Then log the new array to the console.
const arr1=[...arr, 10, 20, 30]
console.log("New Array:", arr1);

// Task 6 : Use the rest operator to create a function that accpect an arbitrary number of arguments , sum them and return the result.

const fun=(...args)=>{
    return args.reduce((a, b)=> a+b);
}
console.log(fun(1, 2, 3, 4, 5));

// Activity 4: Default parameters
// Task 7: Create a function that accepts two parameters, and return there product , with the second parameter default to 1. Log the result if calling this function with and without the second parameter.
const mul=((a, b=1)=>{
    return a*b;
})
console.log("With defaoult value 1:", mul(2, 2));
console.log("Without defaoult value 1:", mul(5));

// Activity 5: Enhanced Object Literals
// Task 8: Use the enhanced object literals to create an object with method and properties , and log them to the console.
const dogName="Lilly"
const dogColor="red"
const anotherDog={
    dogName,
    dogColor,
    bark(){
        console.log("barking");
    }
}
console.log("anotherDog name:", anotherDog.dogName);
console.log("anotherDog color:", anotherDog.dogColor);
anotherDog.bark();

// Task 9:Create an onject with computed property names based on variable and log the object to the console.
const name1="name"
const name2="color"
const name3= "owner"
const owner="XYZ"
const dogObj={
    [name1]:dogName,
    [name2]:dogColor,
    [name3]:owner
}
console.log("Dog Object:",dogObj);