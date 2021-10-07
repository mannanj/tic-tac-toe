import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Players } from 'src/app/models/game.models';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() move: Players;
  @Output() emitMove = new EventEmitter<void>();
}
