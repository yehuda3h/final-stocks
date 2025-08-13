import { useState } from "react";
import { api } from "../../../../utils/api";

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
    confirm("Please check for spelling errors.");
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
    <section className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md fle">
      <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Add Category
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium text-gray-700">
            Category Name
          </label>
          <input
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="text"
            id="name"
            name="name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Enter category name"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="categoryCode"
            className="mb-2 font-medium text-gray-700"
          >
            Category Code
          </label>
          <input
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="text"
            id="categoryCode"
            name="categoryCode"
            value={categoryCode}
            onChange={(e) => setCategoryCode(e.target.value)}
            placeholder="Enter category code"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="categoryImage"
            className="mb-2 font-medium text-gray-700"
          >
            Category Image URL
          </label>
          <input
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="text"
            id="categoryImage"
            name="categoryImage"
            value={categoryImage}
            onChange={(e) => setCategoryImage(e.target.value)}
            placeholder="Enter image URL"
          />
        </div>

        {categoryImage && (
          <div className="mt-2 rounded-md border border-gray-300 overflow-hidden shadow-sm">
            <img
              src={categoryImage}
              alt={categoryName}
              className="w-full h-48 object-contain bg-gray-50"
            />
          </div>
        )}

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white font-semibold py-3 rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
