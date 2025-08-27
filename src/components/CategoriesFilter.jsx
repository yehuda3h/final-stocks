import { useEffect, useState } from "react";
 import { api } from "../utils/api";
import CategorySelectList from "./CategorySelectList";
 export default function CategoriesFilter({
  setSelectedCategory,
  selectedCategory,
}) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fatchCategories = async () => {
      const res = await api.get("/categories");
      const data = res.data;

      setCategories(data.data);
    };
    fatchCategories();
  }, []);
 

  return (
    <div className="bg-gradient-to-r from-[rgb(173,216,230)] via-[rgb(135,206,250)] to-[rgb(70,130,180)] rounded-2xl shadow-md px-6 py-4 mb-8 max-w-3xl mx-auto flex flex-col md:flex-row md:items-end gap-4">
      <div className="flex-1">
        <label
          htmlFor="category"
          className="block text-[#22333B] font-semibold mb-1"
        >
          Category
        </label>
        <CategorySelectList
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <button
        className="bg-blue-400 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
        onClick={() => setSelectedCategory("")}
      >
        Clear Filters
      </button>
    </div>
  );
}
