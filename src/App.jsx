import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/components/HomePage";
import StocksPage from "./components/StocksPage";
import Navbar from "./components/NavBar";
import "./App.css";
import SignupPage from "./pages/SingupPage";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
 import PageProdact from "./pages/pageStock/PageProdact";
import { api } from "./utils/api";
import AdminPage from "./pages/adminPage/AdminPage";

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
    allowRoles: ["user", "admin", "guest"],
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
    allowRoles: ["user", "admin", "guest"],
  },
  {
    path: "/signup",
    title: "Signup",
    element: <SignupPage />,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#183153"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25v-1.5A4.5 4.5 0 019 14.25h1.5m6 6v-3m0 0v-3m0 3h3m-3 0h-3"
        />
      </svg>
    ),
    allowRoles: ["guest"],
  },
  {
    path: "/login",
    title: "Login",
    element: <LoginPage />,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#183153"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M18 12l-3-3m3 3l-3 3m3-3H9"
        />
      </svg>
    ),
    allowRoles: ["guest"],
  },
  // {
  //   path: "/logout",
  //   title: "Logout",
  //   element: (
  //     <div className="flex items-center justify-center h-screen">
  //       <h1 className="text-2xl font-bold text-gray-800">
  //         You have been logged out
  //       </h1>
  //     </div>
  //   ),
  //   allowRoles: ["user", "admin"],
  // },
  {
    path: "/admin",
    title: "Admin",
    element: <AdminPage />,
    allowRoles: ["admin"],
  },
  {
    path: "/stock/:id",
    element: <PageProdact />,
    allowRoles: ["admin", "user", "guest"],
  },
];

export const filterLinks = (links, role) => {
  return links.filter(({ allowRoles }) => allowRoles.includes(role));
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const { data } = await api.get("auth/validate");
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    validateToken();
  }, []);
  return (
    <div className="min-h-screen bg-home-background ">
      <AuthContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Routes>
          {filterLinks(links, user?.role || "guest").map(
            ({ path, element }) => (
              <Route path={path} element={element} />
            )
          )}
          ;
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
