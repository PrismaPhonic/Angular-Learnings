import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  clearInputFields() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }

  collectIngredientFromForm(): Ingredient {
    return new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );
  }

  onAddIngredients() {
    this.shoppingListService
      .addIngredient(
        this.collectIngredientFromForm()
      );

    this.clearInputFields();
  }
}
