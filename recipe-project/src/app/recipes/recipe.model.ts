import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(options: {name: string, desc: string, imagePath: string, ingredients: Ingredient[]}) {
    this.name = options.name;
    this.description = options.desc;
    this.imagePath = options.imagePath;
    this.ingredients = options.ingredients;
  }
}
