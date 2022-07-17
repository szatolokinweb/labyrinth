import { initialState } from "./initialState";
import { ACTION_TYPES } from "./actionTypes";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.GAME_START:
      return {
        ...state,
        gameState: "game",
        gameTimeStart: payload.gameTimeStart,
        gameStart: payload.gameStart,
        gameEnd: payload.gameEnd,
      };
    case ACTION_TYPES.GAME_EXIT:
      return {
        ...state,
        gameState: "setup",
        gameTimeEnd: payload.gameTimeEnd,
      };
    case ACTION_TYPES.GAME_WIDTH_CHANGE:
      return {
        ...state,
        gameWidth: payload,
      };
    case ACTION_TYPES.GAME_HEIGHT_CHANGE:
      return {
        ...state,
        gameHeight: payload,
      };
    case ACTION_TYPES.GAME_STEPS_COUNT_CHANGE:
      return {
        ...state,
        gameStepsCount: payload,
      };
    default:
      return state;
  }
};

/*
  store
    gameState
      setup
      game
      result

  game state flow
    setup -> game -> [result ->] setup -> ...
*/
