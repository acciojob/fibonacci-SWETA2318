function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    let result;

    for (let i = 2; i <= num; i++) {
      result = a + b;
      a = b;
      b = result;
    }

    return result;
  }
}

// Examples
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
module.exports = fibonacci;