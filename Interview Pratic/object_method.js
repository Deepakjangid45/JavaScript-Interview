// const obj = {
//     name: "deepak",
//     class: "BA",
//     rollNO: 11
// }

// const ab = Object.freeze(obj)
// const cb = Object.seal(obj)
// // console.log(ab)

// let o = Object.assign({}, obj);
// // console.log(o)

// let ent = Object.entries(obj);
// console.log(ent)

//.2

// const obj = {
//   name: "deepak",
//   class: "BA",
//   rollNO: 11,
// };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// obj["age"] = 12;
// console.log(obj)

// console.log(Object.values(obj));

// console.log(Object.entries(obj));

// console.table(obj);

// const new_obj = Object.assign({}, obj, { role: "dev" });
// console.table(new_obj);


//.2

// const obj = {};
// obj.name = "deepak";
// obj.college = "delhi college"

// console.log(obj)


//.3

// const grade = "A";
// switch (Key) {
//   case "value":
//     console.log("a is good boy")
// }


//4
let person = {
  name: "deepak",
  age: 25,
  countery: "Bharat",
}

let pdelete = "age";
switch (pdelete) {
  case "name":
    delete person.name;
    console.log("name will be deleted");
    break;
  case "age":
    delete person.age
    console.log("age will be deleted")
    break;
  default:
    console.log("invalid propery to delete")
}

console.log(person)