import { Link } from "react-router-dom";
import Page from "../components/layout/page";
import { Card } from "../components/ui";
import heroImg from "../assets/recipe-book-logo.jpg";

type Difficulty = "Easy" | "Medium" | "Hard";

const featuredRecipes: {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  cookTime: string;
  difficulty: Difficulty;
}[] = [
  {
    id: 1,
    title: "Pasta Carbonara",
    description:
      "A rich and creamy Italian classic made with eggs, aged Pecorino, guanciale, and cracked black pepper.",
    image: heroImg,
    tags: ["Italian", "Pasta"],
    cookTime: "30 min",
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Spiced Lamb Tagine",
    description:
      "Slow-cooked Moroccan tagine with tender lamb, preserved lemons, olives, and warm aromatic spices.",
    image: heroImg,
    tags: ["Moroccan", "Slow Cook"],
    cookTime: "2.5 hrs",
    difficulty: "Medium",
  },
  {
    id: 3,
    title: "Sourdough Loaf",
    description:
      "Crusty artisan sourdough with an open crumb, made from a naturally fermented overnight starter.",
    image: heroImg,
    tags: ["Baking", "Bread"],
    cookTime: "4 hrs",
    difficulty: "Hard",
  },
  {
    id: 4,
    title: "Thai Green Curry",
    description:
      "Fragrant and creamy green curry with coconut milk, fresh herbs, and your choice of protein.",
    image: heroImg,
    tags: ["Thai", "Curry"],
    cookTime: "40 min",
    difficulty: "Medium",
  },
  {
    id: 5,
    title: "Chocolate Lava Cake",
    description:
      "Individual molten chocolate cakes with a warm liquid centre, best served with vanilla ice cream.",
    image: heroImg,
    tags: ["Dessert", "Chocolate"],
    cookTime: "25 min",
    difficulty: "Medium",
  },
  {
    id: 6,
    title: "Buddha Bowl",
    description:
      "Vibrant roasted vegetable bowl with quinoa, tahini dressing, and a rainbow of fresh toppings.",
    image: heroImg,
    tags: ["Vegetarian", "Healthy"],
    cookTime: "45 min",
    difficulty: "Easy",
  },
];

const categories: { name: string; count: number; accent: string }[] = [
  { name: "Breakfast", count: 24, accent: "bg-accent-saffron" },
  { name: "Lunch", count: 38, accent: "bg-accent-terracotta" },
  { name: "Dinner", count: 52, accent: "bg-accent-sage" },
  { name: "Desserts", count: 19, accent: "bg-accent-cream" },
  { name: "Vegetarian", count: 31, accent: "bg-accent-sage" },
  { name: "Quick Meals", count: 27, accent: "bg-accent-saffron" },
];

const Home = () => {
  return (
    <Page>
      <Hero />
      <FeaturedRecipes />
      <Categories />
    </Page>
  );
};

export default Home;

const Hero = () => (
  <section className="relative h-[82vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Hero"
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-linear-to-b from-bg-obsidian/70 via-bg-obsidian/50 to-bg-obsidian/80" />
    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
      <p className="text-accent-saffron text-xs font-bold tracking-widest uppercase mb-5">
        Your Culinary Journey Starts Here
      </p>
      <h1 className="text-text-parchment text-5xl font-bold leading-tight mb-4">
        Discover &amp; Share
        <br />
        <span className="text-accent-saffron">Amazing Recipes</span>
      </h1>
      <p className="text-text-parchment text-lg leading-relaxed mb-10 max-w-xl mx-auto">
        Explore a world of flavours — from comforting classics to bold new
        creations crafted by home cooks everywhere.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link
          to="/recipes"
          className="px-8 py-3 bg-accent-saffron text-bg-obsidian font-bold rounded-full hover:opacity-90 transition-opacity duration-200"
        >
          Browse Recipes
        </Link>
        <Link
          to="/recipes"
          className="px-8 py-3 border border-text-parchment/40 text-text-parchment rounded-full hover:border-accent-saffron hover:text-accent-saffron transition-all duration-200"
        >
          Learn More
        </Link>
      </div>
    </div>
  </section>
);

const FeaturedRecipes = () => (
  <section className="px-10 py-20">
    <div className="max-w-6xl mx-auto">
      <p className="text-accent-saffron text-xs font-bold tracking-widest uppercase mb-2">
        Handpicked for You
      </p>
      <h2 className="text-text-parchment text-3xl font-bold mb-10">
        Featured Recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredRecipes.map((recipe) => (
          <Card key={recipe.id} to={`/recipes/${recipe.id}`} {...recipe} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/recipes"
          className="inline-block px-8 py-3 border border-accent-saffron/40 text-accent-saffron rounded-full hover:bg-accent-saffron hover:text-bg-obsidian font-semibold transition-all duration-200"
        >
          View All Recipes
        </Link>
      </div>
    </div>
  </section>
);

const Categories = () => (
  <section className="px-10 py-20 bg-bg-charcoal">
    <div className="max-w-6xl mx-auto">
      <p className="text-accent-saffron text-xs font-bold tracking-widest uppercase mb-2">
        Explore
      </p>
      <h2 className="text-text-parchment text-3xl font-bold mb-10">
        Browse by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-bg-graphite rounded-xl overflow-hidden hover:bg-bg-slate hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <div className={`h-1 ${cat.accent}`} />
            <div className="p-5">
              <p className="text-text-parchment font-semibold text-sm group-hover:text-accent-saffron transition-colors">
                {cat.name}
              </p>
              <p className="text-text-ash text-xs mt-1">{cat.count} recipes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
