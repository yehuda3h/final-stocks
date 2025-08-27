import React, { useEffect, useState } from "react";
import CardSection from "./CardSection";
import CategoriesFilter from "./CategoriesFilter";
import { useLocation } from "react-router";
 
export default function StocksPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  useEffect(() => {
     if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);
  return (
    <div className="pt-8 px-2 md:px-8">
      <CategoriesFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CardSection selectedCategory={selectedCategory} />
     </div>
  );
}
