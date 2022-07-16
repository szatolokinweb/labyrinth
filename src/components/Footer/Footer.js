import styles from "./Footer.module.scss";

import { TELEGRAM_LINK } from "../../utils/constants";

export const Footer = () => (
  <footer className={styles.footer}>
    <div>Связаться со мной:</div>
    <a className={styles.link} href={TELEGRAM_LINK}>
      Telegram
    </a>
  </footer>
);
