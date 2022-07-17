import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import classNames from "classnames";

import styles from "./Board.module.scss";

import { repeat } from "../../utils/repeat";
import { getPoint } from "../../utils/getPoint";
import { getSymbol } from "../../utils/getSymbol";
import { checkEqualPoints } from "../../utils/checkEqualPoints";

export const Board = () => {
  const { gameState, gameWidth, gameHeight, gameStart, gameEnd } = useSelector(
    (state) => state
  );

  // useEffect(() => {
  //   const handleResize = () => {
  //     console.log(ref.current);
  //   };

  //   handleResize();

  //   return () => {};
  // }, []);

  return (
    <div
      className={classNames(styles.grid, {
        [styles.game]: gameState === "game",
      })}
      style={{ "--width": gameWidth, "--height": gameHeight }}
    >
      {repeat(gameWidth * gameHeight).map((_, index) => {
        const { x, y } = getPoint(index, gameWidth, gameHeight);

        return (
          <div
            key={`${index}-${gameWidth}-${gameHeight}`}
            className={classNames(
              styles.cell,
              {
                [styles.game]: gameState === "game",
              },
              {
                [styles.start]: gameState === "game" && checkEqualPoints({ x, y }, gameStart),
              }
            )}
          >
            {gameState === "game" && getSymbol(x, y, gameStart, gameEnd)}
          </div>
        );
      })}
    </div>
  );
};
