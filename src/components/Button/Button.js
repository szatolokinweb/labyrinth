import classNames from "classnames";

import styles from "./Button.module.scss";

export const Button = ({ children, disabled, onClick, theme, full }) => {
  return (
    <button
      className={classNames(
        styles.button,
        { [styles[theme]]: theme },
        { [styles.full]: full }
      )}
      {...{ disabled, onClick }}
    >
      {children}
    </button>
  );
};
