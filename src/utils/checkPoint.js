import { checkRange } from "./checkRange";

export const checkPoint = (x, y, width, height) => {
  return checkRange(x, 0, width - 1) && checkRange(y, 0, height - 1);
};
