function currySum(num) {
  return function (num2) {
    if (!num2) {
      return num;
    } else {
      return currySum(num + num2);
    }
  };
}

console.log(currySum(2)(2)(2)(2));
