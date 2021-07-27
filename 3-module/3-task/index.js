const capitalLetter = (str) => {
  const firstChar = str[0].toUpperCase();
  return `${firstChar}${str.slice(1)}`;
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
