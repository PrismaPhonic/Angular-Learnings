import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideText = true;
  clicks: Date[] = [];

  toggleDisplayText() {
    this.hideText = !this.hideText;
  }

  handleClick() {
    this.clicks.push(new Date());
    console.log(this.clicks);
    this.toggleDisplayText();
  }
}
