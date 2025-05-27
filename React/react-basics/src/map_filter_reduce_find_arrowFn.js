// This is where we would test out these functions which are quite useful

var numbers = [2, 32, 23, 51, 97]

// map(): maps all the elements of the provided element to a specific fn as arguments and returns o/p as new array 
function double(nums) {
  return 2*nums;
}
const newNumbers = numbers.map(double);  // [ 4, 64, 46, 102, 194 ]
console.log(newNumbers);

// filter(): create a new array by keeping only the items that returns true for a specific condition
const filteredNums = numbers.filter(function (num) {
  return num > 10; 
})
console.log(filteredNums);

// reduce(): accumulate a value bu doing something to each item in an array
console.log("Using reduce function");
const reducedNum = numbers.reduce(function(accumulater, currentNumber){
  console.log("accumulater = " + accumulater);
  console.log("currentNumber = " + currentNumber);
  return accumulater+currentNumber;
})
console.log("reducedNum = "+reducedNum+", {In this case it's sum of all the numbers in the array}");

// find()
// syntax: 
// const data = arrayName.find(element => element.someKey === someData);

// Similar to this we also have findIndex() which gives us the index of the matched data

// Arrow function 
// As you see here when creating that anonymous fn we can also drop the "function" keyword and 
// have a big fat arrow there, this is what an arrow function is basically 

// const squaredNum = numbers.map((x) => {
//   return x * x;
// })

// This can further be shortened to 

const squaredNum = numbers.map(x => x*x)

console.log("Using arrow fn: \n",squaredNum)