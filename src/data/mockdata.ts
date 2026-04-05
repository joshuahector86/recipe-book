import type { Recipe } from "../types/types";

const recipes: Recipe[] = [
  {
    id: 1,
    recipeName: "Pasta Carbonara",
    recipeCookTime: "30 min",
    recipeClassification: "Italian",
    recipeMainIngredient: "Pasta",
    recipeIngredients: [
      "400g spaghetti",
      "200g guanciale",
      "4 egg yolks",
      "100g Pecorino Romano",
      "Black pepper",
      "Salt",
    ],
    recipeCookingSteps: [
      "Boil salted water and cook spaghetti until al dente.",
      "Fry guanciale in a pan over medium heat until crispy.",
      "Whisk egg yolks with grated Pecorino and cracked black pepper.",
      "Reserve a cup of pasta water, then drain the pasta.",
      "Remove pan from heat, add pasta to guanciale, and toss.",
      "Add egg mixture, tossing quickly while adding pasta water to loosen.",
      "Serve immediately with extra Pecorino and black pepper.",
    ],
  },
  {
    id: 2,
    recipeName: "Spiced Lamb Tagine",
    recipeCookTime: "2.5 hrs",
    recipeClassification: "Moroccan",
    recipeMainIngredient: "Lamb",
    recipeIngredients: [
      "800g lamb shoulder, cubed",
      "2 preserved lemons",
      "100g green olives",
      "1 tsp cumin",
      "1 tsp coriander",
      "1 tsp cinnamon",
      "1 onion, sliced",
      "400ml chicken stock",
    ],
    recipeCookingSteps: [
      "Season lamb with cumin, coriander, cinnamon, salt, and pepper.",
      "Brown lamb in batches in a hot tagine or heavy pot.",
      "Soften the onion in the same pot for 5 minutes.",
      "Return lamb to the pot, add stock, preserved lemons, and olives.",
      "Cover and cook on low heat for 2 hours until lamb is tender.",
      "Adjust seasoning and serve with couscous or flatbread.",
    ],
  },
  {
    id: 3,
    recipeName: "Sourdough Loaf",
    recipeCookTime: "4 hrs",
    recipeClassification: "Baking",
    recipeMainIngredient: "Flour",
    recipeIngredients: [
      "500g bread flour",
      "375ml warm water",
      "100g active sourdough starter",
      "10g salt",
    ],
    recipeCookingSteps: [
      "Mix flour and water, rest for 30 minutes (autolyse).",
      "Add starter and salt, mix until fully incorporated.",
      "Perform 4 sets of stretch-and-folds over 2 hours.",
      "Shape the dough and place in a floured banneton.",
      "Cold proof in the fridge overnight.",
      "Preheat oven to 250°C with a Dutch oven inside.",
      "Score the dough, bake covered for 20 minutes, then uncovered for 25 minutes.",
    ],
  },
  {
    id: 4,
    recipeName: "Thai Green Curry",
    recipeCookTime: "40 min",
    recipeClassification: "Thai",
    recipeMainIngredient: "Coconut Milk",
    recipeIngredients: [
      "400ml coconut milk",
      "3 tbsp green curry paste",
      "500g chicken breast, sliced",
      "200g baby aubergine",
      "4 kaffir lime leaves",
      "2 tbsp fish sauce",
      "1 tsp palm sugar",
      "Thai basil to serve",
    ],
    recipeCookingSteps: [
      "Heat a wok over high heat and add a splash of coconut milk.",
      "Fry the green curry paste for 2 minutes until fragrant.",
      "Add chicken and stir-fry until sealed.",
      "Pour in remaining coconut milk and add lime leaves and aubergine.",
      "Simmer for 15 minutes until chicken is cooked through.",
      "Season with fish sauce and palm sugar.",
      "Serve over jasmine rice, topped with Thai basil.",
    ],
  },
  {
    id: 5,
    recipeName: "Chocolate Lava Cake",
    recipeCookTime: "25 min",
    recipeClassification: "Dessert",
    recipeMainIngredient: "Dark Chocolate",
    recipeIngredients: [
      "200g dark chocolate (70%)",
      "200g unsalted butter",
      "4 eggs",
      "4 egg yolks",
      "100g caster sugar",
      "60g plain flour",
      "Cocoa powder for dusting",
    ],
    recipeCookingSteps: [
      "Preheat oven to 200°C and grease ramekins, dust with cocoa.",
      "Melt chocolate and butter together over a bain-marie.",
      "Whisk eggs, yolks, and sugar until pale and thick.",
      "Fold chocolate mixture into the egg mixture.",
      "Sift in flour and fold until just combined.",
      "Pour into ramekins and bake for 12 minutes.",
      "Rest for 1 minute, then invert onto plates and serve immediately.",
    ],
  },
  {
    id: 6,
    recipeName: "Buddha Bowl",
    recipeCookTime: "45 min",
    recipeClassification: "Vegetarian",
    recipeMainIngredient: "Quinoa",
    recipeIngredients: [
      "200g quinoa",
      "1 sweet potato, cubed",
      "1 can chickpeas, drained",
      "100g kale",
      "1 avocado",
      "3 tbsp tahini",
      "2 tbsp lemon juice",
      "1 tbsp olive oil",
    ],
    recipeCookingSteps: [
      "Cook quinoa according to packet instructions.",
      "Toss sweet potato and chickpeas in olive oil, roast at 200°C for 25 minutes.",
      "Massage kale with a pinch of salt until tender.",
      "Whisk tahini with lemon juice and 2 tbsp water to make dressing.",
      "Assemble bowls with quinoa as the base.",
      "Top with roasted vegetables, kale, and sliced avocado.",
      "Drizzle tahini dressing over the top and serve.",
    ],
  },
];

// To connect to a CMS or REST API, replace the bodies of these functions.
// e.g. getRecipes: () => fetch('/api/recipes').then(r => r.json())
// e.g. getRecipeById: (id) => fetch(`/api/recipes/${id}`).then(r => r.json())
// The async signature stays the same so callers need no changes.

export async function getRecipes(): Promise<Recipe[]> {
  return Promise.resolve(recipes);
}

export async function getRecipeById(id: number): Promise<Recipe | undefined> {
  return Promise.resolve(recipes.find((r) => r.id === id));
}
