import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/components/HomePage";
import StocksPage from "./components/StocksPage";
import Navbar from "./components/NavBar";
import "./App.css";

export const links = [
  { path: "/", title: "Home", element: <HomePage /> },
  { path: "/stocks", title: "stocks", element: <StocksPage /> },
];

function App() {
  return (
    <div className="min-h-screen ">
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
