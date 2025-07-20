import React, { useState } from "react";
import CardSection from "./CardSection";
import CategoriesFilter from "./CategoriesFilter";
import CardAdvertiser from "../pages/pageStock/CardAdvertiser";

export default function StocksPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="pt-8 px-2 md:px-8">
      <CategoriesFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CardSection selectedCategory={selectedCategory} />
      <CardAdvertiser />
    </div>
  );
}
