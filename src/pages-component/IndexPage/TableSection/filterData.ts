export const filterCols = (row: string[][]) => {
  return row.map((cols) => {
    delete cols[6]
    return cols;
  })
}

export const filterHeadings = (cols: string[]) => {
  delete cols[6]
  return cols;
}