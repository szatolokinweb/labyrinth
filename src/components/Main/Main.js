import styles from "./Main.module.scss";

import { Board } from "../Board/Board";
import { Steps } from "../Steps/Steps";
import { Info } from "../Info/Info";
import { Menu } from "../Menu/Menu";

export const Main = () => (
  <main className={styles.main}>
    <div>
      <Board />
    </div>
    <div>
      <Steps />
    </div>
    <div>
      <Info />
    </div>
    <div>
      <Menu />
    </div>
  </main>
);
