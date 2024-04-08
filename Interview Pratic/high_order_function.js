// function mian parametter ek function ho or return bhi ek fuction ho to use hight order functionkhate ha

/**function opreaction(oppraterFun, a, b) {
  return oppraterFun(a, b);
}
function add(a, b) {
  return a + b;
}
let result = opreaction(add, 5, 6);
console.log(result);
 */

//.2

// function GetgreetMethod() {
//   return function () {
//     console.log("hello deepak");
//   };
// }

// let greetFn = GetgreetMethod();
// greetFn();


//.3 Example of a higher-order function

// function opreactions(a, b, high) {
//   return high(a, b);
// }

// function add(a, b) {
//   return a + b
// }

// const result = opreactions(2, 2, add)
// console.log(result)


//.4 Higher-order function returning a function

// function multipalyBy(factor) {
//   return function (number) {
//     return number * factor;
//   }
// }

// const two = multipalyBy(2);
// const result = two(2);
// console.log(result)


//.5

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((ele) => ele * ele);
// const result = numbers.filter((num) => num % 2 === 0);
// const result = numbers.reduce((acc, num) => acc + num + 0)
// console.log(result)


//.6

// function fetchDeta(url, callback) {
//   setTimeout(() => {
//     const deta = { name: "deepak", age: 25 };
//     callback(deta);
//   }, 2000);
// }

// function displayDeta(data) {
//   console.log(data)
// }

// fetchDeta("https://fakestoreapi.com/users", displayDeta);