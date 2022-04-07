// object
let obj: {name: string, age: number } = {
    name: "virgiawan",
    age: 21
};

// array
let names1: string[] = ["virgiawan", "teguh", "kusuma"];
let names2: Array<string|number|string> = ["virgiawan", 1, "kusuma"];
// console.log(names1);

// tuple
let student1: [string, string, number] = ["virgiawan", "kusuma", 20];


// Create a function that accepts an array of union type number and string as parameter and return a string of combination of elements in parameters
function combine(parr: (string|number)[]) {
    return parr.join(" ");
}

let case1 = [1, 'data', '3', 'result'];
let case2 = ['Bejo', 'has', '4', 'sport', 'car'];

console.log(combine(case1));
console.log(combine(case2));


// Create a function that accepts Custom Type of array of string and array of number
type customType = (string|number)[];

function customCombine (parr: customType) {
    let result = parr.join(" ");
    return result;
}

console.log(customCombine(case1));
console.log(customCombine(case2));