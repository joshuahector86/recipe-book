import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Page from "../components/layout/page";
import { getRecipeById } from "../data/mockdata";
import type { Recipe } from "../types/types";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getRecipeById(Number(id)).then((data) => {
      setRecipe(data ?? null);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <Page>
        <div className="px-10 py-20 text-text-mist">Loading...</div>
      </Page>
    );
  }

  if (!recipe) {
    return (
      <Page>
        <div className="px-10 py-20">
          <p className="text-text-mist mb-4">Recipe not found.</p>
          <Link
            to="/recipes"
            className="text-accent-saffron hover:underline text-sm"
          >
            ← Back to Recipes
          </Link>
        </div>
      </Page>
    );
  }

  return (
    <Page>
      {/* Header */}
      <div className="bg-bg-charcoal border-b border-bg-slate px-10 py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/recipes"
            className="text-text-mist text-sm hover:text-accent-saffron transition-colors mb-8 inline-block"
          >
            ← Back to Recipes
          </Link>
          <span className="block w-fit text-xs px-2.5 py-1 bg-bg-slate text-accent-saffron rounded-full border border-accent-saffron/20 mb-4">
            {recipe.recipeClassification}
          </span>
          <h1 className="text-text-parchment text-4xl font-bold leading-tight mb-8">
            {recipe.recipeName}
          </h1>
          <div className="flex flex-wrap gap-px">
            <div className="pr-8">
              <p className="text-text-ash text-xs uppercase tracking-widest mb-1">
                Cook Time
              </p>
              <p className="text-text-parchment font-semibold">
                {recipe.recipeCookTime}
              </p>
            </div>
            <div className="border-l border-bg-slate pl-8">
              <p className="text-text-ash text-xs uppercase tracking-widest mb-1">
                Main Ingredient
              </p>
              <p className="text-text-parchment font-semibold">
                {recipe.recipeMainIngredient}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-10 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Ingredients */}
          <div>
            <h2 className="text-text-parchment text-xl font-bold mb-6">
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.recipeIngredients.map((ingredient, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-saffron flex-shrink-0" />
                  <span className="text-text-mist text-sm leading-relaxed">
                    {ingredient}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cooking Steps */}
          <div>
            <h2 className="text-text-parchment text-xl font-bold mb-6">
              Cooking Steps
            </h2>
            <ol className="space-y-6">
              {recipe.recipeCookingSteps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-bg-graphite border border-accent-saffron/30 text-accent-saffron text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-text-mist text-sm leading-relaxed pt-1">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default RecipeDetail;
