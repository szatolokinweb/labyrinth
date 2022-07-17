import classNames from "classnames";

import styles from "./Steps.module.scss";

import { repeat } from "../../utils/repeat";
import { STEPS_DELAY } from "../../utils/constants";
import { useStoreState } from "../../hooks/useStoreState";

export const Steps = () => {
  const { gameState, gameStepsCount, gameSteps } = useStoreState();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {((gameState === "setup" && repeat(gameStepsCount)) || gameSteps).map(
          (step, index) => (
            <div
              key={index}
              className={classNames(styles.item, {
                [styles.active]: step,
              })}
              style={{
                "--delay": `${index * STEPS_DELAY}ms`,
              }}
            >
              <div
                className={classNames(
                  styles.icon,
                  {
                    [styles.active]: step,
                  },
                  {
                    [styles[step]]: step,
                  }
                )}
              >
                {"<"}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
