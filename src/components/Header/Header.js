import styles from "./Header.module.scss";

import { TELEGRAM_LINK } from "../../utils/constants";

export const Header = () => (
  <header className={styles.header}>
    <a className={styles.logo} href={TELEGRAM_LINK}>
      Лабиринт
    </a>
  </header>
);
