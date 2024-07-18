// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers and log them 
const arr=new Array(1, 2 ,30 ,4 ,5);
console.log("Array:", arr);

// Task 2: Access first and last element of the array
console.log(`First Element: ${arr[0]} and last Element: ${arr[arr.length-1]}`);

// Activity 2: Array Methods (Basics)
// Task 3: Use push method
arr.push(10);
console.log("Pushed 10:", arr);

// Task 4: Use pop method
arr.pop();
console.log("Array after pop:",arr);

// Task 5: Use shift method
arr.shift();
console.log("Array after shift:", arr);

// Task 6: Use unshift method
arr.unshift(1);
console.log("Array after unshift:", arr);

// Activity 3: Array Methods (Intermediate)
// Task 7: Use map and doubled the array elements
const doubledArr=arr.map((ele)=>{
    return ele*2;
});
console.log("Array after doubled:", doubledArr);

// Task 8: Use filter method and return even number only
const filteredArr=arr.filter((ele)=>{
    return ele%2===0;
})
console.log("Filtered array:", filteredArr);

// Task 9: Use reduce method and return sum of all arr elements
const arraySum=arr.reduce((preValue, currValue)=>{
    return preValue+currValue;
})
console.log("Reduced array:", arraySum);

// Activity 4: Array Iteration
// Task 10: Use for loop and print array element
for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// Task 11: Use forEach method to iterate the array element
arr.forEach(ele=> console.log(ele))

// Activity 5: Multi-Dimentional Arrays
// Task 12: Print a matrix
const matrix=[[1, 2 ,3 ], [4, 5, 6], [7, 8 ,9]];
for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[0].length;j++){
        console.log(matrix[i][j]);
    }
}

// Task 13: Access random element from matrix
console.log(matrix[0][1]);