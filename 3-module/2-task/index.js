function filterRange(arr, a, b) {
  const result = [];
  arr.forEach(element => {
    if (element >= a && element <= b) {
      result.push(element);
    }
  });
  return result;
}
