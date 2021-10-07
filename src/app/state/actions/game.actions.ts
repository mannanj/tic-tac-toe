import { createAction, props } from '@ngrx/store';
 
export const initializeBoard = createAction('[Game] Initialize Board');
 
export const makeNextMove = createAction(
    '[Game] Make Next Move',
    props<{ index: number }>()
);
