import { ACTION_TYPES } from "./actionTypes";
import { generatePoint } from "../utils/generatePoint";

export const gameTimeTick = () => ({ type: ACTION_TYPES.GAME_TIME_TICK });

export const gameStart = () => (dispatch, getState) => {
  const { gameWidth, gameHeight, gameStepsCount } = getState();

  const gameStart = generatePoint(gameWidth, gameHeight);
  const gameEnd = generatePoint(gameWidth, gameHeight);

  dispatch({
    type: ACTION_TYPES.GAME_START,
    payload: {
      gameTimeStart: new Date(),

      gameStart,
      gameEnd,
    },
  });
};

export const gameExit = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GAME_EXIT,
    payload: {
      gameTimeEnd: new Date(),
    },
  });
};

export const gameWidthChange = (width) => ({
  type: ACTION_TYPES.GAME_WIDTH_CHANGE,
  payload: width,
});
export const gameHeightChange = (height) => ({
  type: ACTION_TYPES.GAME_HEIGHT_CHANGE,
  payload: height,
});
export const gameStepsCountChange = (stepsCount) => ({
  type: ACTION_TYPES.GAME_STEPS_COUNT_CHANGE,
  payload: stepsCount,
});
