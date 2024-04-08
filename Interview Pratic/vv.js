// let courses = ["HTML", "CSS", "JavaScript", "React"];
// // console.log(courses.length)
// let str = courses.toString();
// // console.log(str)
// let ab = courses.join("|")
// // console.log(ab)

// let emp = {
//     firstName: "Raj",
//     lastName: "Kumar",
//     salary: 40000
// }
// // console.log(delete emp.salary)
// // console.log(emp)


// //.3
// // Declare three arrays
// let arr1 = [11, 12, 13];
// let arr2 = [14, 15, 16];
// let arr3 = [17, 18, 19];

// // let newArray = arr1.concat(arr2, arr3);
// // let newArray=arr1.concat(11,22,33);
// // let newArray=arr1.concat(arr2,arr3);
// let newArray = arr1.concat(arr2, arr3);
// // console.log(newArray);


// const arr = [['1', '2'], ['3', '4', '5', ['6'], '7']];
// // console.log(arr.flat())

// let numArr = [10, 20, 30, 40, 50];
// // console.log(numArr.push(60))
// // console.log(numArr)
// // numArr.unshift(99,88);
// // console.log(numArr)

// let strArr = ["piyush", "gourav", "smruti", "ritu"];
// // strArr.push("sumit", "amit");
// strArr.unshift("deepak", "ABC")
// console.log(strArr)


// // Array Splice
// // let array = [1, 2, 3, 4, 5, 6];
// // // array.splice(1, 3)
// // console.log(array)

// let slcStar = ["Apple", "Banana", "Graps", "Beateer", "Mango"];
// // add karne k liye
// slcStar.splice(1, 1, "wantermalen", "orange",)
// 1 se 1 delete kr do or age wo add kr do
// remove karne k liye matlab 1 se start kri or 2 element remove kr do
// slcStar.splice(1, 2)

// console.log(slcStar)


// //.3 slice method yhe orignal array ko modifiy nhi karta
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// // console.log(fruits)
// let sliceFruites = fruits.splice(1, 3);
// // console.log(sliceFruites);

// let slcNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let result = slcNum.slice(-2, 4);
// console.log(result);



//.2 turneru opraters

// console.log(true ? "deepak" : 100)
// console.log(5 > 12 ? "deepak" : 100)
// const gender = "F"
// const result = `${gender === "F" ? "She" : "HE"}`
// console.log(result)

//.3

// const fruits = ["mango", "apple", "orange"];
// const myFruits = fruits;
// myFruits.push("dates")
// myFruits.push("graps")
// console.log(fruits)
// console.log(myFruits)


//.4
// const user1 = {
//     fName: "deepak",
//     lName: "jangid"
// }
// console.log(user1)
// console.log(user2)

// const user2 = {};
// // Object.assign(user1, user2)
// console.log(user2.fname = "kamal")
// console.log(user1)
// console.log(user2)

// const user2 = { ...user1 };
// user2.lName = "ABC"
// console.log(user1)
// console.log(user2)


//.
const fruits = ["mango", "apple", "orange"];
// const myFruits = [];
// Object.assign(myFruits, fruits);
// myFruits.push("Gana")
// console.log(fruits);
// console.log(myFruits);

//

// const myFruits = [].concat(fruits);
// const myFruits = [...fruits];
// myFruits.push("fraps")
// console.log(fruits)
// console.log(myFruits)


//.7 arguments keyword

// function add(a, b) {
//     console.log(arguments)
//     return a + b;
// }
// console.log(add(2, 2))

//. 8 arguments key word
// function add() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         // console.log(arguments[i])
//         sum += arguments[i];
//     }
//     return sum;
// }

// console.log(add(2, 3, 4, 4,))

//.10 function and method

// const ab = {
//     fn: function () {
//         console.log("deepak")
//     }
// }

// ab.fn();


//.2

