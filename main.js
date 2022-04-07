// object
var obj = {
    name: "virgiawan",
    age: 21
};
// array
var names1 = ["virgiawan", "teguh", "kusuma"];
var names2 = ["virgiawan", 1, "kusuma"];
// console.log(names1);
// tuple
var student1 = ["virgiawan", "kusuma", 20];
// Create a function that accepts an array of union type number and string as parameter and return a string of combination of elements in parameters
function combine(parr) {
    return parr.join(" ");
}
var case1 = [1, 'data', '3', 'result'];
var case2 = ['Bejo', 'has', '4', 'sport', 'car'];
console.log(combine(case1));
console.log(combine(case2));
function customCombine(parr) {
    var result = parr.join(" ");
    return result;
}
console.log(customCombine(case1));
console.log(customCombine(case2));
