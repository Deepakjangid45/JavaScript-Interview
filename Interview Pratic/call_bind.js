/**
 * 
let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function () {
        console.table(this.name);
    }
}
*/

// let HiFun = PrintName.sayHi.bind(nameObj);
// HiFun();

//.2

// const name1 = {
//     name: "deepak"
// }

// let printName = {
//     name: "madhav nagri",
//     fun: function () {
//         console.log(this.name)
//     }
// }

// const result = printName.fun.bind(name1);
// result();

//.3 Call method in js
/**
 * 
const youtuber1 = {
    name: "deepak",
  content: "DSA",
  fetcher: function () {
      console.log(`my name is ${this.name} and content is ${this.content}`);
    },
};

const youtuber2 = {
    name: "Madhav",
    content: "Python",
};
youtuber1.fetcher.call(youtuber2);

*/

//.4 Bind method
/**
 * 
const youtuber1 = {
  name: "deepak",
  content: "DSA",
  fetcher: function () {
    console.log(`my name is ${this.name} and content is ${this.content}`);
  },
};

const youtuber2 = {
  name: "Madhav",
  content: "Python",
};

let fun2 = youtuber1.fetcher.bind(youtuber2);
fun2()

*/

//.5 why javascript is first call function
/**
 * 
function printName(name) {
  console.log(name);
}
printName.city = "fazilka";
printName("deepak");
console.log(printName.city)

*/

//.6 call function using for borrowing the function
/**
 * 
const user1 = {
  name: "deepak",
  greatting: function () {
    console.log(`hello, ${this.name}`);
  },
};

const user2 = {
  name: "fazilka",
};

// user1.greatting();
user1.greatting.call(user2);
console.log(user2);

*/

//.7 call method for bowwring function
/**
 * 
const user1 = {
  name: "deepak",
};

function greatting(city, age) {
  // console.log(`hello ${this.name}`);
  console.log(`${this.name} ${city},${age}`);
}

const user2 = {
  name: "fazilka",
};
*/

// greatting.call(user1); // line number 113
// greatting.call(user1, "fazilka", 11);
// greatting.call(user2, "madhav nagri", 99);

// Applay methid bhi same ha bus [] arry ke ander argument dene ha

// greatting.apply(user1, ["fazilka", 11]);

//. 8 bind metod bhi this ka contact chnage krega and ek naya function create krega & yhe nya function returnkarta ha

const person = {
  name: "deepak",
  sayhi: function (city, age) {
    console.log(`hello, ${this.name} from ${city} of age ${age}`);
  },
};

const ontherPerson = {
  name: "deepak",
};

const result = person.sayhi.bind(ontherPerson, "fazilka", 999);
result();
