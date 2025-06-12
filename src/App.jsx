import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import StocksPage from "./pages/StocksPage";

function App() {
  return (
    <Routes>
      <Route index element={ <HomePage />} />
      <Route path="/stocksGallery" element = { <StocksPage/>}/>
    </Routes>
  );
}

export default App;
