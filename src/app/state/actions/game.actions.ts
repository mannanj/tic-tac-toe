import { createAction, props } from '@ngrx/store';
import { IGame } from 'src/app/models/game.models';
 
export const initializeGame = createAction('[Game] Initialize Game');
 
export const setGameTurn = createAction(
    '[Game] Game Turn',
    props<{ turn: number }>()
);

export const setGamePlayer = createAction(
    '[Game] Game Player',
    props<{ player: number }>()
);


export const setGameWon = createAction(
    '[Game] Game Won!',
    props<{ won: boolean }>()
);
