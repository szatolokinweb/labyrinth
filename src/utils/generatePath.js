import { generateStep } from "./generateStep";

export const generatePath = (width, height, count, start) => {
  const steps = [];
  let cur = { ...start };

  for (let i = 0; i < count; i++) {
    const step = generateStep(cur.x, cur.y, width, height);

    switch (step) {
      case "up":
        cur.y -= 1;
        break;
      case "down":
        cur.y += 1;
        break;
      case "left":
        cur.x -= 1;
        break;
      case "right":
        cur.x += 1;
        break;
    }

    steps.push(step);
  }

  return {
    gameSteps: steps,
    gameEnd: cur,
  };
};
