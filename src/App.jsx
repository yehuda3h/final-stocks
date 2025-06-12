import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import StocksPage from "./pages/StocksPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/stocks" element={<StocksPage />} />
    </Routes>
  );
}

export default App;
