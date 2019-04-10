import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  resetUser() {
    this.username = '';
  }

  isUserEmpty() {
    return (this.username === '');
  }
}
