import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { SquareComponent } from './components/square/square.component';
import { GameGetter } from './state/facades/game.getter';
import { appReducer } from './state/reducers/app.reducer';
import { GameDispatcher } from './state/facades/game.dispatcher';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    GameDispatcher,
    GameGetter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
