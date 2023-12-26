function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    let temp;

    for (let i = 2; i <= num; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }

    return a;
  }
}
module.exports = fibonacci;