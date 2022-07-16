import styles from "./App.module.scss";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

export const App = () => (
  <div className={styles.app}>
    <Header />
    <Main />
    <Footer />
  </div>
);
