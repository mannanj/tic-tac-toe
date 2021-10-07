import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { GameGetter } from 'src/app/state/facades/game.getter';
import { IGameState } from 'src/app/state/reducers/game.reducer';
import { GameDispatcher } from 'src/app/state/facades/game.dispatcher';
import { Players } from 'src/app/models/game.models';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject();
  gameState: IGameState;
  hasWinner: Players;

  constructor(
    private gameGetter: GameGetter,
    private gameDispatcher: GameDispatcher
  ) {}

  ngOnInit(): void {
    this.gameGetter.getState$()
      .pipe(
        filter((state: IGameState) => !!state.moves && state.moves.length > 0),
        takeUntil(this.unsubscribe$))
      .subscribe(state => this.processGameState(state));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  processGameState(state: IGameState) {
    this.gameState = state;
    if (this.gameState.winner) {
      this.hasWinner = this.gameState.winner;
    }
  }

  processMove(index: number) {
    if (!this.hasWinner && this.gameState.moves && !this.gameState.moves[index]) {
      this.gameDispatcher.makeNextMove(index);
    }
  }
}
