function makeDiagonalRed(table) {
  let countIndex = 0;
  const collTr = table.rows;
  for (let t = 0; t < collTr.length; t += 1) {
    const collTd = collTr[t].cells;
    for (let i = 0; i < collTd.length; i += 1) {
      if (countIndex === i) {
        collTd[i].style.backgroundColor = 'red';
      }
    }
    countIndex += 1;
  }
}
