function truncate(str, maxlength) {
  if (str.length > maxlength) {
    const newStr = `${str.slice(0, maxlength - 1)}…`;
    return newStr;
  }
  return str;
}
