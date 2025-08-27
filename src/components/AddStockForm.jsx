import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import CategorySelectList from "./CategorySelectList";
import { api } from "../utils/api";

export default function AddStockForm({ addStock }) {
  const { data, error, loading, sendRequest } = useAxios();
  const [stockData, setStockData] = useState({
    product_name: "",
    price: "",
    stock: "",
    image_url: "",
    location: "",
    category_code: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fatchCategories = async () => {
      const res = await api.get("/categories");
      const data = res.data;
      setCategories(data.data);
    };
    fatchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStockData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await sendRequest({
        url: "/stocks",
        method: "POST",
        body: stockData,
      });

      addStock(response);
      setStockData({
        product_name: "",
        price: "",
        stock: "",
        image_url: "",
        location: "",
        category_code: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md max-h-[80vh] overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Add Stock
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="product_name" className="mb-2 font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            value={stockData.product_name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category_code" className="mb-2 font-medium text-gray-700">
            Category
          </label>
          <CategorySelectList
            categories={categories}
            selectedCategory={stockData.category_code}
            setSelectedCategory={(category_code) =>
              setStockData((prev) => ({ ...prev, category_code }))
            }
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="mb-2 font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={stockData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="stock" className="mb-2 font-medium text-gray-700">Stock Count</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={stockData.stock}
            onChange={handleChange}
            placeholder="Enter stock quantity"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image_url" className="mb-2 font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={stockData.image_url}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {stockData.image_url && (
          <div className="mt-2 rounded-md border border-gray-300 overflow-hidden shadow-sm">
            <img
              src={stockData.image_url}
              alt={stockData.product_name}
              className="w-full h-48 object-contain bg-gray-50"
            />
          </div>
        )}

        <div className="flex flex-col">
          <label htmlFor="location" className="mb-2 font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={stockData.location}
            onChange={handleChange}
            placeholder="Enter location"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white font-semibold py-3 rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Add Stock
        </button>
      </form>
    </section>
  );
}
