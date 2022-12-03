const range = (start: number, end: number) =>
  Array(end + 1 - start)
    .fill(start)
    .map((x, y) => x + y);

export default range;
