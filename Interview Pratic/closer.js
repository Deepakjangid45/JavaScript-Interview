/**
 * closer function
 * .1 matlab apna deta private kr usko dikwo mat lekin app usko use kr sakte ho
 * .2 we use closer incapsulaction/ IMP deta private karne k liye
 */

// function outerFn() {
//   let outerVar = "i am from outer fun";
//   function innerFn() {
//     console.log(outerVar);
//   }
//   return innerFn;
// }
// let fn = outerFn();
// fn();

/**
 * .2 quastion
 */

// function custmoerCounter() {
//   let count = 0;
//   return function () {
//     count += 1;
//     console.log("New counter is ", count);
//   };
// }
// let counter = custmoerCounter();
// counter();
// counter();
// counter();
// counter();


//.3
function outerFunction(x) {
  // Inner function, jo outerFunction ke scope ke sath closure banati hai
  function innerFunction(y) {
    return x + y;
  }

  // Inner function ko bahar se access karke use call karna
  return innerFunction;
}

// Closure ko create karte waqt, x ki value 5 hai
const closureExample = outerFunction(5);

// Inner function ko closure ke sath access karna
const result = closureExample(3); // Output: 8

