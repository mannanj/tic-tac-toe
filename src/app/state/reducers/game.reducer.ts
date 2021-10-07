import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { checkForWinner } from 'src/app/helpers/winner';
import { IMoveOrder, Players } from 'src/app/models/game.models';
import * as GameActions from '../actions/game.actions';

export interface IGameState {
  moves: Players[];
  nextPlayer: Players;
  moveOrder: IMoveOrder;
  winner: Players;
}

export const initialState: IGameState = {
  moves: Array(9).fill(null),
  nextPlayer: Players.One,
  moveOrder: {},
  winner: null
};

export const reducer = createReducer(
    initialState,
    on(GameActions.makeNextMove, (state, { index }) => {
      const moves = [...state.moves];
      moves[index] = state.nextPlayer;
      const moveOrder = updateMoveOrder(state, index);
      const winner = checkForWinner(moves, state.nextPlayer);
      return {
          ...state,
          moves,
          nextPlayer: state.nextPlayer === Players.One ? Players.Two : Players.One,
          moveOrder,
          winner
        };
    })
  );

export function gameReducer(state: IGameState | undefined, action: Action) {
    return reducer(state, action);
}

export const getState = createFeatureSelector<IGameState>('game');

export const getMoves = createSelector(
    getState,
    (state: IGameState) => state.moves
);

export const getNextPlayer = createSelector(
  getState,
  (state: IGameState) => state.nextPlayer
);

export const getMoveOrder = createSelector(
  getState,
  (state: IGameState) => state.moveOrder
);

export const getWinner = createSelector(
  getState,
  (state: IGameState) => state.winner
);

// Helpers
function updateMoveOrder(state: IGameState, index: number): IMoveOrder {
  const moveOrder = {...state.moveOrder};
  moveOrder[index] = state.nextPlayer;
  return moveOrder;
}