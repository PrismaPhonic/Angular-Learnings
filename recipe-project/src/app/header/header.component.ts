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

  toggleRecipeDisplay() {
    this.displayRecipes = !this.displayRecipes;
    this.displayRecipesEvent.emit(this.displayRecipes);
  }

  toggleShoppingListDisplay() {
    this.displayShoppingList = !this.displayShoppingList;
    this.displayShoppingListEvent.emit(this.displayShoppingList);
  }
}
