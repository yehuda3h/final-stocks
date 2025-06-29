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
    <>
      <Navbar />
      <Routes>
        {links.map(({path,element}) => (
          <Route path={ path} element={ element}/>
        ))}
      </Routes>
    </>
  );
}

export default App;
