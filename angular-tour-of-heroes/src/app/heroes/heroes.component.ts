import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes.ts';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }
}
