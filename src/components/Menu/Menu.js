import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import styles from "./Menu.module.scss";

import { Button } from "../Button/Button";
import { Control } from "../Control/Control";
import { ACTION_TYPES } from "../../store/actionTypes";

export const Menu = () => {
  const dispatch = useDispatch();

  const { gameState } = useSelector((state) => state);

  const [width, setWidth] = useState(3);
  const [height, setHeight] = useState(5);
  const [stepsCount, setStepsCount] = useState(10);

  return (
    <div className={styles.menu}>
      <div
        className={classNames(styles.panel, {
          [styles.hide]: gameState !== "setup",
        })}
      >
        <div>
          <div className={styles.label}>Ширина:</div>
          <Control value={width} onChange={setWidth} min={3} max={10} />
        </div>
        <div>
          <div className={styles.label}>Высота:</div>
          <Control value={height} onChange={setHeight} min={3} max={10} />
        </div>
        <div>
          <div className={styles.label}>Кол-во шагов:</div>
          <Control
            value={stepsCount}
            onChange={setStepsCount}
            min={5}
            max={20}
          />
        </div>
      </div>
      <div>
        <div>
          {gameState === "setup" ? (
            <Button
              full
              onClick={() => dispatch({ type: ACTION_TYPES.GAME_START })}
            >
              Начать игру
            </Button>
          ) : gameState === "game" ? (
            <Button
              full
              theme="danger"
              onClick={() => dispatch({ type: ACTION_TYPES.GAME_EXIT })}
            >
              Завершить игру
            </Button>
          ) : (
            123
          )}
        </div>
      </div>
    </div>
  );
};
