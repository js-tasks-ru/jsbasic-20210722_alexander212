function checkSpam(str) {
  const coll = ['1xBet', 'XXX'];
  for (let i = 0; i < coll.length; i += 1) {
    const normalizeStr = str.toLowerCase();
    const normalizeElement = coll[i].toLowerCase();
    if (normalizeStr.indexOf(normalizeElement) >= 0) {
      return true;
    }
  }
  return false;
}
