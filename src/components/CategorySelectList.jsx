import React from "react";

export default function CategorySelectList({
  selectedCategory,
  setSelectedCategory,
  categories,
}) {
  return (
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
  );
}
