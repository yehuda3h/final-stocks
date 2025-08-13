import AddCategoryButton from "./components/categories/AddCtegoryButton";
import CategoriesList from "./components/categories/CategoriesList";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import UsersList from "./components/users/UsersList";
import StockList from "./components/stocks/StockList";

export default function AdminPage() {
  const [categories, setCategories] = useState([]);
  const [currentSection, setCurrentSection] = useState("categories");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await api.get("/categories");
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const addCategory = (newCategory) => {
    setCategories((prev) => [...prev, newCategory]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Admin Page</h1>

      <nav className="flex justify-center gap-8 mb-8">
        <button
          onClick={() => setCurrentSection("categories")}
          className="text-blue-300 hover:text-blue-700 font-semibold px-6 py-2 rounded transition"
        >
          categories
        </button>
        <button
          onClick={() => setCurrentSection("users")}
          className="text-blue-300 hover:text-blue-700 font-semibold px-6 py-2 rounded transition"
        >
          users
        </button>
        <button
          onClick={() => setCurrentSection("stocks")}
          className="text-blue-300 hover:text-blue-700 font-semibold px-6 py-2 rounded transition"
        >
          stocks
        </button>
      </nav>

      {currentSection === "categories" && (
        <div className="flex flex-col md:px-40 sm:px-12 px-5">
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h4v4H4V6zm6 0h4v4h-4V6zm6 0h4v4h-4V6zM4 12h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 18h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"
              />
            </svg>
            <p>Categories</p>
          </div>
          <div>
            <AddCategoryButton addCategory={addCategory} />
            <CategoriesList
              categories={categories}
              setCategories={setCategories}
            />
          </div>
        </div>
      )}

      {currentSection === "users" && (
        <div className="flex flex-col md:px-40 sm:px-12 px-5">
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-3.333 5.333-5 8-5s8 1.667 8 5" />
            </svg>
            <p>Users</p>
          </div>
          <UsersList />
        </div>
      )}
      {currentSection === "stocks" && (
        <div className="flex flex-col md:px-40 sm:px-12 px-5">
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {/* שקית מקרטון עם ידית עגולה קטנה ומרובע נמוך */}
              <rect
                x="5"
                y="9"
                width="14"
                height="10"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M9 9a3 3 0 0 1 6 0"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <p>Stocks</p>
          </div>
          <StockList />
        </div>
      )}
    </div>
  );
}
