import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeClicked = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  constructor() { }

  ngOnInit() {
  }

  showRecipeDetails(recipe: Recipe) {
    this.recipeClicked.emit(recipe);
  }
}
