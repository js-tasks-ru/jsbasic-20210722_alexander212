function getMinMax(str) {
  const arr = str.split(' ').reduce((acc, element) => {
    const elements = element.split(',');
    return [...acc, ...elements];
  }, []);
  const numbers = arr.reduce((acc, element) => {
    const num = parseFloat(element);
    if (!isNaN(num)) {
      return [...acc, num];
    }
    return acc;
  }, []);
  const sortNumbers = numbers.sort((a, b) => a - b);
  return {
    min: sortNumbers[0],
    max: sortNumbers[sortNumbers.length - 1],
  }
}
