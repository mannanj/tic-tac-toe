import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from 'src/app/state/reducers/app.reducer';
import * as gameActions from 'src/app/state/actions/game.actions'; 
import { Players } from 'src/app/models/game.models';

@Injectable({
    providedIn: 'root'
})
@Injectable()
export class GameDispatcher {
    constructor(private store: Store<fromRoot.IAppState>) {}

    public makeNextMove(index: number) {
        this.store.dispatch(gameActions.makeNextMove({ index }));
    }
}