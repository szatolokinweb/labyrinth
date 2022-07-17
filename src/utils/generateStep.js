export const generateStep = (x, y, width, height) => {
  let done = false;
  let result = null;

  while (!done) {
    let dir = null;

    if (Math.floor(Math.random() * 10) < 5) {
      dir = "horizontal";
    } else {
      dir = "vertical";
    }

    if (dir === "horizontal") {
      if (Math.floor(Math.random() * 10) < 5) {
        result = "left";
      } else {
        result = "right";
      }
    } else {
      if (Math.floor(Math.random() * 10) < 5) {
        result = "up";
      } else {
        result = "down";
      }
    }

    switch (result) {
      case "up":
        if (y - 1 >= 0) {
          done = true;
        }
        break;
      case "down":
        if (y + 1 <= height - 1) {
          done = true;
        }
        break;
      case "left":
        if (x - 1 >= 0) {
          done = true;
        }
        break;
      case "right":
        if (x + 1 <= width - 1) {
          done = true;
        }
        break;
    }
  }

  return result;
};
