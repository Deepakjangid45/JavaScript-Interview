// let counter = 0;
// console.log("shurwat")
// const intervalId = setInterval(() => {
//     counter += 1;
//     console.log(`Interval ${counter}`)
//     if (counter >= 3) {
//         clearInterval(intervalId);
//         console.log("interval rok diya gaya ha")
//     }
// }, 2000)


//.2 map datastuchers

// let emp = new Map();
// emp.set("01", "deepak");
// emp.set("02", "Delhi");
// emp.set("03", "fazilka");

// // console.log(emp.get("02"))
// for (let [id, name] of emp) {
//     console.log(`${id} and ${name}`)
// }


//.3

// let uni = new Set();
// uni.add(10);
// uni.add(20);
// uni.add(30);
// // console.log(uni.has(30))
// for (let ab of uni) {
//     console.log(ab)
// }

//.4

// `sessionStorage` mein data store karna
// sessionStorage.setItem('username', 'JohnDoe');

// `sessionStorage` se data retrieve karna
// const username = sessionStorage.getItem('username');


//.5

// function sortarry(arr) {
//     return arr.slice().sort((a, b) => a - b);
// }

// const arr = [5, 2, 8, 1, 7];
// console.log(sortarry(arr))


//.6 elemets occur in js

// const arr = [1, 1, 2, 3, 1, 4]
// const count = {};
// for (const elemets of arr) {
//     if (count[elemets]) {
//         count[elemets] += 1;
//     } else {
//         count[count] = 1
//     }
// }
// console.log(count)

//.7 remove dublicate in the arry

// const arr = [1, 1, 2, 3, 1, 4]
// const result = arr.filter((item, index) => arr.indexOf(item) == index);
// console.log(result)


//.8
// const call = (a) => {
//     return (b) => {
//         return (c) => {
//             return a * b * c;
//         };
//     };
// };
// console.log("output with arrow function", call(2)(4)(6));


//.9
// const promise = new Promise((reslove, reject) => {
//     const value = 9;
//     if (value < 5) {
//         reslove("promise is reslove")
//     } else {
//         reject("promse is reject")
//     }
// })
// promise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

//.10

// function bubble(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// const arr = [3, 2, 5, 4, 1, 0]
// console.log(bubble(arr))