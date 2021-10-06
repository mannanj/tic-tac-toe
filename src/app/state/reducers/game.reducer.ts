import { createReducer, on, Action } from '@ngrx/store';
import { IGame } from 'src/app/models/game.models';
import * as GameActions from '../actions/game.actions';


export const initialState: IGame = {
    game: null,
    turn: null,
    player: null,
    won: null
};

export const gameReducer = createReducer(
    initialState,
    on(GameActions.initializeGame, (state) => {
      return {
          game: 'ANY',
          turn: 1,
          player: 1,
          won: false
      };
    }),
    on(GameActions.setGameTurn, (state, { turn }) => {
      return {...state, turn};
    }),
    on(GameActions.setGamePlayer, (state, { player }) => {
      return {...state, player};
    }),
    on(GameActions.setGameWon, (state, { won }) => {
      return {...state, won};
    })
  );