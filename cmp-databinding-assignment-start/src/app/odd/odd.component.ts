import {Component, ContentChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @ContentChild('odd') odd: number;

  constructor() { }

  ngOnInit() {
  }

}
