import styles from "./Footer.module.scss";

import { TELEGRAM_LINK, EMAIL } from "../../utils/constants";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.place}>
      <div>Связаться со мной:</div>
    </div>
    <div className={styles.place}>
      <a className={styles.link} href={TELEGRAM_LINK}>
        Telegram
      </a>
    </div>
    <div className={styles.place}>
      <a className={styles.link} href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
    </div>
  </footer>
);
