import { useSelector } from "react-redux";

import { styles } from "./Info.module.scss";

import { Clock } from "../Clock/Clock";

export const Info = () => {
  const { gameState } = useSelector((state) => state);

  return gameState === "game" && <Clock />;
};
