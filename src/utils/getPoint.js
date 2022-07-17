export const getPoint = (index, width, height) => ({
  x: index % width,
  y: Math.floor(index / height),
});
