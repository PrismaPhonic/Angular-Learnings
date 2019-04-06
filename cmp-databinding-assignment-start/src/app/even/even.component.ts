import {Component, ContentChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @ContentChild('even') even: number;

  constructor() { }

  ngOnInit() {
  }

}
