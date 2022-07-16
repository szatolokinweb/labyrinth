import styles from "./Menu.module.scss";

import { Button } from "../Button/Button";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <div>
        <div>
          <Button theme="danger">123</Button>
        </div>
        <div>
          <Button full>123</Button>
        </div>
        <div>
          <Button disabled>123</Button>
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
