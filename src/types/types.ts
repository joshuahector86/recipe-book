export interface Recipe {
  id: number;
  recipeName: string;
  recipeCookTime: string;
  recipeClassification: string;
  recipeMainIngredient: string;
  recipeIngredients: string[];
  recipeCookingSteps: string[];
}
