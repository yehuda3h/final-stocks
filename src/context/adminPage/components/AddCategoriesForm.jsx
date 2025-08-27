import { useState } from "react";
import { api } from "../../../utils/api";
export default function AddCategoriesForm() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryCode, setCategoryCode] = useState("");
  const [category, setCategory] = useState([]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const newCategory = {
        category: categoryName,
        category_code: categoryCode,
      };

      const { data } = await api.post("/categories", newCategory);

      setCategory((prev) => [...prev, data.data]);
      setCategoryName("");
      setCategoryCode("");
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };

  return (
    <section>
      <h1>categories</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4 items-end">
        <div>
          <label htmlFor="name">Category Name </label>
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
          <label htmlFor="categoryCode">Category Code </label>
          <input
            className="border rounded px-2 py-1"
            type="text"
            id="categoryCode"
            name="categoryCode"
            value={categoryCode}
            onChange={(e) => setCategoryCode(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
          type="submit"
        >
          submit
        </button>
      </form>
      <div>
        {category.map((item) => (
          <div key={item._id}>
            <p>{item.category}</p>
            <p>{item.category_code}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
