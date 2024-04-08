// input [-5,-4,-3,-2,0,2,4,6,8]
// output [-4,4]

// function getSumZero(array) {
//   for (let number of array) {
//     for (let j = 1; j < array.length; j++) {
//       if (number + array[j] == 0) {
//         return [number, array[j]];
//       }
//     }
//   }
// }
// const result = getSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);

//.2 with two pointer

function findSumPair(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    sum = array[left] + array[right];
    if (sum == 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right -= 1;
    } else {
      left += 1;
    }
  }
}
const result = findSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);
