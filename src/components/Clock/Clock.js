import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Clock.module.scss";

export const Clock = () => {
  const { gameTimeStart } = useSelector((state) => state);

  const [gameTime, setGameTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(
      () => setGameTime(new Date(new Date() - gameTimeStart)),
      1
    );
    return () => clearInterval(interval);
  }, []);

  return (
    gameTime && (
      <div className={styles.clock}>
        <div>Время игры:</div>
        <div className={styles.grid}>
          <div>{gameTime.getSeconds()}</div>
          <div>:</div>
          <div>{Math.floor(gameTime.getMilliseconds() / 10)}</div>
        </div>
      </div>
    )
  );
};
