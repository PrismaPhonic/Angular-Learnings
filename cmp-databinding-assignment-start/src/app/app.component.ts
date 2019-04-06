import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds = [];
  evens = [];

  generateComponent($event: number) {
    if ($event % 2 === 0)  {
      this.evens.push($event);
    } else {
      this.odds.push($event);
    }
  }
}
