import { useDispatch } from "react-redux";
import classNames from "classnames";
import { useCallback } from "react";

import styles from "./Menu.module.scss";

import { Button } from "../Button/Button";
import { Control } from "../Control/Control";
import * as actionCreators from "../../store/actionCreators";
import * as constants from "../../utils/constants";
import { useStoreState } from "../../hooks/useStoreState";

export const Menu = () => {
  const dispatch = useDispatch();

  const { gameState, gameWidth, gameHeight, gameStepsCount } = useStoreState();

  const handleChange = useCallback(
    (name, value) => {
      switch (name) {
        case "width":
          dispatch(actionCreators.gameWidthChange(value));
          break;
        case "height":
          dispatch(actionCreators.gameHeightChange(value));
          break;
        case "stepsCount":
          dispatch(actionCreators.gameStepsCountChange(value));
          break;
        default:
          return;
      }
    },
    [dispatch]
  );

  return (
    <div className={styles.menu}>
      <div
        className={classNames(styles.panel, {
          [styles.hide]: gameState !== "setup",
        })}
      >
        <div>
          <div className={styles.label}>Ширина:</div>
          <Control
            name="width"
            value={gameWidth}
            onChange={handleChange}
            min={constants.WIDTH_MIN}
            max={constants.WIDTH_MAX}
          />
        </div>
        <div>
          <div className={styles.label}>Высота:</div>
          <Control
            name="height"
            value={gameHeight}
            onChange={handleChange}
            min={constants.HEIGHT_MIN}
            max={constants.HEIGHT_MAX}
          />
        </div>
        <div>
          <div className={styles.label}>Кол-во шагов:</div>
          <Control
            name="stepsCount"
            value={gameStepsCount}
            onChange={handleChange}
            min={constants.STEPS_COUNT_MIN}
            max={constants.STEPS_COUNT_MAX}
          />
        </div>
      </div>
      <div>
        <div>
          {gameState === "setup" ? (
            <Button full onClick={() => dispatch(actionCreators.gameStart())}>
              Начать игру
            </Button>
          ) : gameState === "game" ? (
            <Button
              full
              theme="danger"
              onClick={() => dispatch(actionCreators.gameExit())}
            >
              Завершить игру
            </Button>
          ) : (
            <Button full onClick={() => dispatch(actionCreators.gameSetup())}>
              Далее
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
