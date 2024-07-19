// Activity 1: Object creation and access
// Task 1: 
const book = {
    title: "Think Like a Monk",
    author: "Jay Setty",
    year: 2017
}
console.log(book);

// Task 2:
console.log(`Title: ${book.title} and Author: ${book.author}`)

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with books title and author and log the resilt of calling the method 
book.details = function defineBook() {
    return `The book title is ${this.title} and Author is ${this.author}`
}
console.log(book.details());

// Task 4: Add a method to the book object that takes a parameter (year) and and update the book's year property
book.updateYear = function update(year) {
    return this.year = year;
}
book.updateYear(2020)
console.log("Updated year:", book.year);


// Activity 3: Nested Object
// Task 5: Create a nested object representing the library with properties like name and books (an array of book object ) and log the library object 
const library = {
    name: "Central library",
    books: [
        {
            title: "Think Like a Monk",
            author: "Jay Setty",
            year: 2017
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        }

    ],
}
console.log("Library:", library);

// Task 6: Access  and log the name of the library and titles of all the books of library
console.log(`Name of Library: ${library.name}`);
library.books.map((b, index)=>{
    console.log(`Book${index+1} title:`, b.title);
})

// Activity 4 : The this keyword
// Task 7: Add a method to book object that uses the this keyword to return a string with books title and year and log the result of calling this method
console.log(book.details());

// Activity 5: Object Iteration
// Task 8: Use a For....in loop to iterate over the properties of the book object and log each property and its value 
for(let property in book){
    if(book.hasOwnProperty(property)){
        console.log(`${property} : ${book[property]}`);
    }
}

// Task 9: Use Object.keys and Object.values methods to log the key and value of the book object 
const keys=Object.keys(book);
keys.forEach(key=>{
    console.log("key:" ,key);
})
const values=Object.values(book);
values.forEach(value=>{
    console.log("Value:", value);
})