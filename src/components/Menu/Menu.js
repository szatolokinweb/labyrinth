import { useState } from "react";

import styles from "./Menu.module.scss";

import { Button } from "../Button/Button";
import { Control } from "../Control/Control";

export const Menu = () => {
  const [width, setWidth] = useState(3);
  const [height, setHeight] = useState(5);
  const [stepsCount, setStepsCount] = useState(10);

  return (
    <div className={styles.menu}>
      <div>
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
          <Button full>Начать игру</Button>
        </div>
      </div>
    </div>
  );
};
