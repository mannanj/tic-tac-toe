import { IGame } from 'src/app/models/game.models';

export interface IAppState {
  game: IGame;
  user: any;
}