// let arr = ["deepak", "fazilka", "madhav nagri"];
// let [city, name, mohla] = arr;
// console.log(city);

// var [firstName, secondName, game, delta] = ["alpha", "beta", "gamma", "delta"];

// console.log(firstName);
// console.log(secondName);
// console.log(game);
// console.log(delta);

//.2

// var [firstName, , ...lastName] = ["alpha", "beta", "gamma", "delta"];

// console.log(firstName);
// console.log(lastName);

//.3
// let arr = ["deepak", "javascript", "c++", "java"];
// let [ab, ...dee] = arr;
// console.log(dee);

//.4

// const marks = {
//   section1: { alpha: 15, beta: 16 },
//   section2: { alpha: -31, beta: 19 },
// };
// const {
//   section1: { alpha: alpha1, beta: beta1 },
// } = marks;
// console.log(alpha1, beta1);

//.5 visva mohan

// const num = [1, 2, 3];
// const [a, b, c] = num;
// console.table(num)

//.2

const person = {
  name: "deepak",
  age: 25,
  address: { city: "fazilka", state: "punjab" },
};

const {
  name,
  age,
  address: { city, state },
} = person;
console.table(city);
