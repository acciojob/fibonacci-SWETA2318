function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  let a = 0;
  let b = 1;
  let temp;

  for (let i = 2; i <= num; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

module.exports = fibonacci;