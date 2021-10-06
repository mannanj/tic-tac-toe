import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as GameActions from 'src/app/state/actions/game.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tic-tac-toe';

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(GameActions.initializeGame());
  }

}
