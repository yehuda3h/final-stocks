import { useState, useEffect } from "react";
import { api } from "../../../utils/api";
export default function AddCategoriesForm({ addCategory }) {
  const [categoryName, setCategoryName] = useState("");
  const [categoryCode, setCategoryCode] = useState("");
  const [categoryImage, setCategoryImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCategory = {
      category: categoryName,
      category_code: categoryCode,
      image: categoryImage,
    };
    try {
      const { data } = await api.post("/categories", newCategory);
      addCategory(data.data);
      setCategoryName("");
      setCategoryCode("");
      setCategoryImage("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <h1>categories</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4 items-end">
        <div>
          <label htmlFor="name">Category Name</label>
          <input
            className="border rounded px-2 py-1"
            type="text"
            id="name"
            name="name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="categoryCode">Category Code</label>
          <input
            className="border rounded px-2 py-1"
            type="text"
            id="categoryCode"
            name="categoryCode"
            value={categoryCode}
            onChange={(e) => setCategoryCode(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="categoryImage">Category Image </label>
           <input
            className="border rounded px-2 py-1"
            type="text"
            id="categoryImage"
            name="categoryImage"
            value={categoryImage}
            onChange={(e) => setCategoryImage(e.target.value)}
          />
          {categoryImage && (
            <div>
              <img src={categoryImage} alt={categoryName} />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
        >
          submit
        </button>
      </form>
    </section>
  );
}
