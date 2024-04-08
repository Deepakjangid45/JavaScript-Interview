// What is prototype inheritance in Javascript

// class Person {
//     constructor(fname, lname, age) {
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//     }
//     greet() {
//         console.log("hello")
//     }

// }

// const obj = new Person("deepak", "jangid", 25)
// console.log(obj.greet())



// const obj = {
//     name: "deepak",
//     lname: "jangid",
//     age: 25,
//     fetcher: function () {
//         console.log(`fname is ${this.name} and lname is ${this.lname} age is ${this.age}`)
//     }
// }

// const dee = {
//     name: "fazilka",
//     lname: "punjab",
//     age: 100
// }

// // const result = obj.fetcher.bind(dee);
// const result = obj.fetcher.call(dee);
// // result()
// // result

//.3 applay

// const obj = {
//     fName: "deepak jangid"
// }

// function displayName(city, age) {
//     console.log(`name ${this.fName} city ${city} age ${age}`)
// }

// const obj2 = {
//     fName: "fazilka"
// }

// displayName.apply(obj, ["madhavnagri", 11])


