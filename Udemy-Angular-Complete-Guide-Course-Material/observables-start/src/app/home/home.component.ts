import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  myNumbersSub: Subscription;
  myObservableSub: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000);
    this.myNumbersSub = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
    const myObservable = Observable
      .create((observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package');
        }, 2000);
        setTimeout(() => {
          observer.next('second package');
        }, 4000);
        setTimeout(() => {
          //observer.error('this does not work');
          observer.complete();
        }, 5000);
        setTimeout(() => {
          //observer.error('this does not work');
          observer.next('This package should not show');
        }, 5000);
      });

    this.myObservableSub = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.error(error); },
      () => { console.log('completed'); },
    );
  }

  ngOnDestroy(): void {
    this.myNumbersSub.unsubscribe();
    this.myObservableSub.unsubscribe();
  }

}
