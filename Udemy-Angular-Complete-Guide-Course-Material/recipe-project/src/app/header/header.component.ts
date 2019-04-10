import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayRecipes = true;
  displayShoppingList = false;
  @Output() displayRecipesEvent = new EventEmitter<boolean>();
  @Output() displayShoppingListEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.displayRecipesEvent.emit(this.displayRecipes);
    this.displayShoppingListEvent.emit(this.displayShoppingList);
  }

  showRecipes() {
    this.displayRecipes = true;
    this.displayShoppingList = false;
    this.emitEvents();
  }

  emitEvents() {
    this.displayRecipesEvent.emit(this.displayRecipes);
    this.displayShoppingListEvent.emit(this.displayShoppingList);
  }

  showShoppingList() {
    this.displayRecipes = false;
    this.displayShoppingList = true;
    this.emitEvents();
  }
}
