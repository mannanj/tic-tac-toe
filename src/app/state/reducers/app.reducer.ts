import {
    ActionReducerMap
} from '@ngrx/store';
import * as fromGame from 'src/app/state/reducers/game.reducer';

export interface IAppState {
    game: fromGame.IGameState;
}

export const appReducer: ActionReducerMap<IAppState> = {
    game: fromGame.gameReducer,
};