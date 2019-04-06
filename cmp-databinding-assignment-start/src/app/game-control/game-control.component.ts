import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() timerEvent: EventEmitter<number> = new EventEmitter<number>();
  private timer: NodeJS.Timer;
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.timer = setInterval(() => this.timerEvent.emit(this.count++), 1000);
  }

  stopGame() {
    clearInterval(this.timer);
    this.count = 0;
  }
}
