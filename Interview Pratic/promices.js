// let promise = new Promise(function (resolve, reject) {
//     const x = "geeksforgeeks";
//     const y = "deepak"
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise.
//     then(function () {
//         console.log('Success, You are a GEEK');
//     }).
//     catch(function () {
//         console.log('Some error has occurred');
//     });

//.2

// let promise = new Promise(function (resolve, reject) {
//     resolve('Geeks For Geeks');
//     reject("deepak is rejected")
// })

// promise
//     .then(function (successMessage) {
//         //success handler function is invoked
//         console.log(successMessage);
//     }, function (errorMessage) {
//         console.log(errorMessage);
//     });

//.3 promice ka code padhna assan hota ha

// const myPromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("primoces relove")
//   } else {
//     reject("promoces reject")
//   }
// })

// myPromise.then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.log(error)
// })

//.4 promices chaniing

// const firstPromices = new Promise((resolve, reject) => {
//   resolve("First Promices Reslove")
// });

// const secondPromices = () => {
//   return new Promise((resolve, reject) => {
//     resolve(`second promices resloved`)
//   })
// }

// firstPromices.then((result) => {
//   console.log(result);
//   return secondPromices(result);
// }).then((result) => {
//   console.log(result)
// }).catch((error) => { console.log(error) })


//.5

// const pOne = new Promise((reslove, reject) => {
//   setTimeout(() => {
//     reslove("Promoces 1 is Reslove")
//   }, 3000);
// })

// const pTwo = new Promise((reslove, reject) => {
//   setTimeout(() => {
//     reslove("Promices 2 is Reslove")
//   }, 2000);
// })


// const pThree = new Promise((reslove, reject) => {
//   setTimeout(() => {
//     reslove("Promices 3 is Reslove")
//   }, 1000);
// })

// Promise.all([pOne, pTwo, pThree]).then((result) => {
//   console.log("All Promoces is result " + result)
// }).catch((error) => {
//   console.log("All Promices is Reject" + error)
// })


//.6
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = 'Fetched data!';
//     callback(data);
//   }, 1000);
// }

// fetchData((result) => {
//   console.log(result);
// });