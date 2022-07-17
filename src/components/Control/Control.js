import { useCallback } from "react";

import styles from "./Control.module.scss";

import { Button } from "../Button/Button";

export const Control = ({ name, value, onChange, min, max }) => {
  return (
    <div className={styles.grid}>
      <div>
        <Button
          full
          onClick={() => value - 1 >= min && onChange(name, value - 1)}
          disabled={value === min}
        >
          -
        </Button>
      </div>
      <div className={styles.value}>{value}</div>
      <div>
        <Button
          full
          onClick={() => value + 1 <= max && onChange(name, value + 1)}
          disabled={value === max}
        >
          +
        </Button>
      </div>
    </div>
  );
};
