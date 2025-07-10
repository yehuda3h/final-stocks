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
  {
    path: "/",
    title: "Home",
    element: <HomePage />,
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 10.5L12 4L21 10.5"
          stroke="#183153"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 10V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V10"
          stroke="#183153"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    path: "/stocks",
    title: "stocks",
    element: <StocksPage />,
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="3" width="7" height="7" rx="2" fill="#183153" />
        <rect x="14" y="3" width="7" height="7" rx="2" fill="#183153" />
        <rect x="14" y="14" width="7" height="7" rx="2" fill="#183153" />
        <rect x="3" y="14" width="7" height="7" rx="2" fill="#183153" />
      </svg>
    ),
  },
  { path: "/signup", title: "Signup", element: <SignupPage /> },
  { path: "/login", title: "Login", element: <LoginPage /> },
];

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="min-h-screen bg-home-background">
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
