import { useState } from "react";
import { api } from "../../../../utils/api";

export default function AddCategoriesForm({ addCategory }) {
  const [categoryData, setCategoryData] = useState({
    category: "",
    category_code: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    confirm("Please check for spelling errors.");

    try {
      const { data } = await api.post("/categories", categoryData);
      addCategory(data.data);
      setCategoryData({ category: "", category_code: "", image: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Add Category
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="category" className="mb-2 font-medium text-gray-700">
            Category Name
          </label>
          <input
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="text"
            id="category"
            name="category"
            value={categoryData.category}
            onChange={handleChange}
            placeholder="Enter category name"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="category_code"
            className="mb-2 font-medium text-gray-700"
          >
            Category Code
          </label>
          <input
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="text"
            id="category_code"
            name="category_code"
            value={categoryData.category_code}
            onChange={handleChange}
            placeholder="Enter category code"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="mb-2 font-medium text-gray-700">
            Category Image URL
          </label>
          <input
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="text"
            id="image"
            name="image"
            value={categoryData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </div>

        {categoryData.image && (
          <div className="mt-2 rounded-md border border-gray-300 overflow-hidden shadow-sm">
            <img
              src={categoryData.image}
              alt={categoryData.category}
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
