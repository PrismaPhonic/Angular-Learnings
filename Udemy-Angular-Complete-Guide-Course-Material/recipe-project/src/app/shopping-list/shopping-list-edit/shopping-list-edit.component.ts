import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  collectIngredientFromForm(): Ingredient {
    return new Ingredient(
      this.signupForm.value.name,
      this.signupForm.value.amount,
    );
  }

  onSubmit() {
    this.shoppingListService
      .addIngredient(
        this.collectIngredientFromForm()
      );

    this.signupForm.resetForm();
  }

}
