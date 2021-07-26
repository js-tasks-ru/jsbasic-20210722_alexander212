const capitalLetter = (str) => {
  const arr = str.split('');
  const firstLetter = arr.shift().toUpperCase();
  arr.unshift(firstLetter);
  return arr.join('');
}

function camelize(str) {
  const arr = str.split('-');
  const camelizeArr = arr.map((element, index) => {
    if (index < 1) {
      return element;
    }
    return capitalLetter(element);
  });

  return camelizeArr.join('');
}
