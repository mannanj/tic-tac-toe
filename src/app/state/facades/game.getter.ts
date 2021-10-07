import { Observable } from 'rxjs';
import * as fromGame from 'src/app/state/reducers/game.reducer';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from 'src/app/state/reducers/app.reducer';
import { IMoveOrder, Players } from 'src/app/models/game.models';

@Injectable()
export class GameGetter {
    constructor(private store: Store<fromRoot.IAppState>) {}

    public getState$(): Observable<fromGame.IGameState> {
        return this.store.pipe(select(fromGame.getState));
    }

    public getMoves$(): Observable<string[]> {
        return this.store.pipe(select(fromGame.getMoves));
    }

    public getNextPlayer$(): Observable<Players> {
        return this.store.pipe(select(fromGame.getNextPlayer));
    }

    public getMoveOrder$(): Observable<IMoveOrder> {
        return this.store.pipe(select(fromGame.getMoveOrder));
    }

    public getWinner$(): Observable<Players> {
        return this.store.pipe(select(fromGame.getWinner));
    }
}