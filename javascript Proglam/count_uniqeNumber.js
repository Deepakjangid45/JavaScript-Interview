// [1, 1, 2, 2, 3, 4, 5];

function countUniqe(array) {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i += 1;
        array[i] = array[j];
      }
    }
    return (i += 1);
  } else {
    throw new Error("array is empty"); 
  }
}

const result = countUniqe([1, 1, 2, 2, 3, 4, 5]);
console.log(result)