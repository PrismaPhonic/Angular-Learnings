import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe ({
      name: 'Schnitzel',
      desc: 'A tasty schnitzel',
      imagePath: 'https://thecozyapron.com/wp-content/uploads/2012/02/schnitzel_thecozyapron_1.jpg',
      ingredients: [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    }),
    new Recipe ({
      name: 'Worcestershire Burger',
      desc: 'Amazing burger with worcestershire sauce',
      imagePath: 'https://www.readersdigest.ca/wp-content/uploads/sites/14/2015/11/gourmet-burger-1024x666.jpg',
      ingredients: [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    })
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  sendIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }
}
