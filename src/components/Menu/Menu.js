import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import styles from "./Menu.module.scss";

import { Button } from "../Button/Button";
import { Control } from "../Control/Control";
import * as actionCreators from "../../store/actionCreators";
import * as constants from "../../utils/constants";

export const Menu = () => {
  const dispatch = useDispatch();

  const { gameState, gameWidth, gameHeight, gameStepsCount } = useSelector(
    (state) => state
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
            value={gameWidth}
            onChange={(width) =>
              dispatch(actionCreators.gameWidthChange(width))
            }
            min={constants.WIDTH_MIN}
            max={constants.WIDTH_MAX}
          />
        </div>
        <div>
          <div className={styles.label}>Высота:</div>
          <Control
            value={gameHeight}
            onChange={(height) =>
              dispatch(actionCreators.gameHeightChange(height))
            }
            min={constants.HEIGHT_MIN}
            max={constants.HEIGHT_MAX}
          />
        </div>
        <div>
          <div className={styles.label}>Кол-во шагов:</div>
          <Control
            value={gameStepsCount}
            onChange={(stepsCount) =>
              dispatch(actionCreators.gameStepsCountChange(stepsCount))
            }
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
            123
          )}
        </div>
      </div>
    </div>
  );
};
