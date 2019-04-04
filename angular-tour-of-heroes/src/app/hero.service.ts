import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  private heroesUrl = "api/heroes";

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);

    let hero: Observable<Hero>;
    this.http.get<Hero[]>(this.heroesUrl)
      .subscribe(heroes => {
        hero = of(heroes.find(hero => hero.id === id));
      });

    return hero;
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _afer_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }
}
