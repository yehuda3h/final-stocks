import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import StocksPage from "./pages/StocksPage";
import Navbar from "./components/NavBar";
import "./App.css";

export const links = [
  { path: "/", title: "Home", element: <HomePage /> },
  { path: "/stocks", title: "stocks", element: <StocksPage /> },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Routes>
        {links.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
