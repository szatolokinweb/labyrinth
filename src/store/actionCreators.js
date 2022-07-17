import { ACTION_TYPES } from "./actionTypes";

export const gameTimeTick = () => ({ type: ACTION_TYPES.GAME_TIME_TICK });

export const gameStart = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GAME_START,
    payload: {
      gameTimeStart: new Date(),
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
