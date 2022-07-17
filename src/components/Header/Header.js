import styles from "./Header.module.scss";

import { GITHUB_LINK } from "../../utils/constants";

export const Header = () => (
  <header className={styles.header}>
    <a className={styles.logo} href={GITHUB_LINK}>
      Лабиринт
    </a>
  </header>
);
