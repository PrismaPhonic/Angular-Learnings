export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(options: {name: string, desc: string, imagePath: string}) {
    this.name = options.name;
    this.description = options.desc;
    this.imagePath = options.imagePath;
  }
}
