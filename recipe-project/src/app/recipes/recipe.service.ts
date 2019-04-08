import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe ({
      name: 'A Test Recipe',
      desc: 'This is simply a test',
      imagePath: 'https://blog.bulletproof.com/wp-content/uploads/2019/01/54-of-the-Best-Whole30-Recipes-on-the-Internet-_header-752x401.jpg'
    }),
    new Recipe ({
      name: 'Another Test Recipe',
      desc: 'This is simply a test',
      imagePath: 'https://blog.bulletproof.com/wp-content/uploads/2019/01/54-of-the-Best-Whole30-Recipes-on-the-Internet-_header-752x401.jpg'
    })
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
