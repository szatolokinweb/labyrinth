import { useSelector } from "react-redux";

import { styles } from "./Steps.module.scss";

export const Steps = () => {
  const { gameSteps, gameStart, gameEnd } = useSelector((state) => state);

  return (
    gameSteps && (
      <>
        <ul>
          {gameSteps.map((step) => (
            <li>{step}</li>
          ))}
        </ul>
      </>
    )
  );
};
