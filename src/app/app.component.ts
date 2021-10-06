import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './models/app.models';
import * as AppActions from './state/actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tic-tac-toe';

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.login();
  }

  login(): void {
    this.store.dispatch(AppActions.login({ usernamae: 'username', password: 'password' }));
  }

}
