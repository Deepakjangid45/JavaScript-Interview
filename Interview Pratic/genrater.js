// function* numberGen() {
//     let i = 0;
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// const get = numberGen();
// console.log(get.next());
// console.log(get.next());
// console.log(get.next());
// console.log(get.next());
// console.log(get.next());


//.2

function* numberGen() {
    let i = 0;
    while (true) {
        yield i = +1;
    }
}

const gen = numberGen();
console.log(gen.next())
console.log(gen.next().value)