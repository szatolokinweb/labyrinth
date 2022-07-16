export const getInRange = (value, min, max) =>
  Math.min(max, Math.max(min, value));
