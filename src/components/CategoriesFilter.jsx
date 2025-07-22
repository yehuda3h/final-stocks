import React, { useEffect, useState } from "react";
 import { api } from "../utils/api";
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
        <select
          id="category"
          name="category"
          className="w-full rounded-lg border border-[#22333B] px-3 py-2 text-[#22333B] bg-white focus:ring-2 focus:ring-[#22333B] transition"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((c) => {
            return (
              <option key={c.category_code} value={c.category_code}>
                {c.category}
              </option>
            );
          })}
        </select>
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
