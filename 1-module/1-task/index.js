function factorial(n) {
  let num = n;
  let result = 1;
  while (num > 1) {
    result *= num;
    num -= 1;
  }
  return result;
}
