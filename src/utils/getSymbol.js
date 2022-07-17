export const getSymbol = (x, y, start, end) => {
  if (x === start.x && y === start.y) {
    return "🏠";
  }
  if (x === end.x && y === end.y) {
    return "🏁";
  }
  return "";
};
