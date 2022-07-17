import { useSelector } from "react-redux";

import styles from "./Board.module.scss";

import { Button } from "../Button/Button";

export const Board = () => {
  const { gameState, gameWidth, gameHeight, gameStart, gameEnd } = useSelector(
    (state) => state
  );

  return (
    gameState === "game" && (
      <div className={styles.grid}>
        {(() => {
          const arr = [];
          for (let i = 0; i < gameHeight; i++) {
            arr.push(123);
          }
          return arr;
        })().map((item, y) => (
          <div>
            {(() => {
              const arr = [];
              for (let i = 0; i < gameWidth; i++) {
                arr.push(123);
              }
              return arr;
            })().map((item, x) => (
              <div>
                {x === gameStart.x && y === gameStart.y
                  ? "start"
                  : x === gameEnd.x && y === gameEnd.y
                  ? "end"
                  : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  );
};
