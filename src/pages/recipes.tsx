import { useEffect, useState } from "react";
import Page from "../components/layout/page";
import { Card } from "../components/ui";
import { getRecipes } from "../data/mockdata";
import type { Recipe } from "../types/types";

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    getRecipes().then(setRecipes);
  }, []);

  return (
    <Page>
      <div className="px-10 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent-saffron text-xs font-bold tracking-widest uppercase mb-2">
            All Recipes
          </p>
          <h1 className="text-text-parchment text-3xl font-bold mb-10">
            Browse Recipes
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <Card
                key={recipe.id}
                to={`/recipes/${recipe.id}`}
                title={recipe.recipeName}
                tags={[recipe.recipeClassification]}
                cookTime={recipe.recipeCookTime}
              />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Recipes;
