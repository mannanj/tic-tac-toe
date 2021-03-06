import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Players } from './models/game.models';
import { GameGetter } from './state/facades/game.getter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  status: string;

  constructor(
    private gameGetter: GameGetter) {}


    ngOnInit() {
      this.gameGetter.getNextPlayer$().subscribe((player: Players) => this.status = `Next Player: ${player}`);
      this.gameGetter.getWinner$().pipe(filter(winner => !!winner)).subscribe((winner: Players) => this.status = `Winner! ${winner}`);
    }
}
