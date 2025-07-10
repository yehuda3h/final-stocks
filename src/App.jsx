import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/components/HomePage";
import StocksPage from "./components/StocksPage";
import Navbar from "./components/NavBar";
import "./App.css";
import SignupPage from "./pages/SingupPage";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./context/AuthContext";
import { useState } from "react";

export const links = [
  { path: "/", title: "Home", element: <HomePage /> },
  { path: "/stocks", title: "stocks", element: <StocksPage /> },
  { path: "/signup", title: "Signup", element: <SignupPage /> },
  { path: "/login", title: "Login", element: <LoginPage /> },
];

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="min-h-screen ">
      <AuthContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Routes>
          {links.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
