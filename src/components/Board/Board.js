import classNames from "classnames";
import { useDispatch } from "react-redux";

import styles from "./Board.module.scss";

import { repeat } from "../../utils/repeat";
import { getPoint } from "../../utils/getPoint";
import { getSymbol } from "../../utils/getSymbol";
import { checkEqualPoints } from "../../utils/checkEqualPoints";
import { useStoreState } from "../../hooks/useStoreState";
import { gameResult } from "../../store/actionCreators";

export const Board = () => {
  const dispatch = useDispatch();

  const { gameState, gameWidth, gameHeight, gameStart, gameEnd } =
    useStoreState();

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
                [styles.game]: gameState !== "setup",
              },
              {
                [styles.start]:
                  gameState === "game" && checkEqualPoints({ x, y }, gameStart),
              }
            )}
            onClick={() => dispatch(gameResult())}
          >
            {gameState === "game" && getSymbol(x, y, gameStart, gameEnd)}
          </div>
        );
      })}
    </div>
  );
};
