import { Route, Routes } from "react-router-dom";
import { Home, Recipes } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
}

export default App;
