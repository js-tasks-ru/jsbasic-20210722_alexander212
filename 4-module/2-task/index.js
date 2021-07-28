function makeDiagonalRed(table) {
  let countIndex = 0;
  const collTr = table.rows;
  for (let t = 0; t < collTr.length; t += 1) {
    const collTd = collTr[t].cells;
    if (countIndex === t) {
      collTd[t].style.backgroundColor = 'red';
    }
    countIndex += 1;
  }
}
