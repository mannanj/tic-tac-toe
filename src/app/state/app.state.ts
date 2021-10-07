import { IGameState } from "./reducers/game.reducer";

export interface IAppState {
  game: IGameState;
  user: any;
}