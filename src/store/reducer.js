import { initialState } from "./initialState";
import { ACTION_TYPES } from "./actionTypes";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.GAME_START:
      return {
        ...state,
        gameState: "game",
        gameTimeStart: payload.gameTimeStart,
      };
    case ACTION_TYPES.GAME_EXIT:
      return {
        ...state,
        gameState: "setup",
        gameTimeEnd: payload.gameTimeEnd,
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
