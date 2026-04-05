import { Route, Routes } from "react-router-dom";
import { Home, Recipes, RecipeDetail } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/:id" element={<RecipeDetail />} />
    </Routes>
  );
}

export default App;
