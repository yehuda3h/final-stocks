import { use, useEffect, useState } from "react";
import { api } from "../../../utils/api";
import { useNavigate } from "react-router";
export default function CategoriesSection() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

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

  return (
    <div className="py-5">
      <h2 className="text-3xl font-bold text-center text-blue-200 ">
        Categories
      </h2>
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {categories.map((item) => (
          <CatItem category={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

function CatItem({ category }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/stocks?category=${category.category_code}`)}
      className="text-center w-24 h-40 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-120 hover:-translate-y-3 hover:rotate-3 hover:shadow-2xl active:scale-110 active:shadow-2xl"
    >
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg border-2 border-blue-300 ">
        <img
          src={category.image}
          alt={category.category}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="mt-3 text-md font-semibold text-blue-300">
        {category.category}
      </h2>
    </div>
  );
}
