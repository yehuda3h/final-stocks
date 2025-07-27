import AddCategoriesForm from "../../pages/adminPage/components/AddCategoriesForm";
import CategoriesList from "../../pages/adminPage/components/CategoriesList";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";

export default function AdminPage() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await api.get("/categories");
        setCategories(data.data);
        console.log(data.data);
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
      <h1 className="text-2xl font-bold text-center">Admin Page</h1>
      <AddCategoriesForm addCategory={addCategory} />
      <CategoriesList categories={categories} />
      
    </div>
  );
}
