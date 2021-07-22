const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n - 0) && !isNaN(n - 0);
};

function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (isNumber(salaries[key])) {
      sum += salaries[key];
    }
  }
  return sum;
}
