import React, { useState, useEffect } from "react";
import useAxios from "../../../../hooks/useAxios";
import SaveIcon from "../../../../icons/SaveIcon";
import CancelIcon from "../../../../icons/CancelIcon";
import EditIcon from "../../../../icons/EditIcon";
import DeleteIcon from "../../../../icons/DeleteIcon";
import ButtonOfAdd from "../../../../components/ButtonOfAdd";

export default function StockList() {
  const [stocks, setStocks] = useState([]);
  const { data, error, loading, sendRequest } = useAxios();

  const [editingStockId, setEditingStockId] = useState(null);
  const [editedStockData, setEditedStockData] = useState({
    product_name: "",
    category_code: "",
    price: "",
    stock: "",
    image_url: "",
    location: "",
  });

  const addStock = (newStock) => {
    setStocks((prev) => [...prev, newStock]);
  };

  const startEditingStock = (stock) => {
    setEditingStockId(stock._id);
    setEditedStockData({
      product_name: stock.product_name,
      category_code: stock.category_code,
      price: stock.price,
      stock: stock.stock,
      image_url: stock.image_url,
      location: stock.location,
    });
  };

  const saveEditedStock = async () => {
    const payload = {
      ...editedStockData,
      price: Number(editedStockData.price),
      stock: Number(editedStockData.stock),
    };

    if (!payload._id) {
      payload._id = editingStockId;
    }

    const data = await sendRequest({
      url: `/stocks/${editingStockId}`,
      method: "PUT",
      body: payload,
    });

    if (data) {
      setStocks((prev) =>
        prev.map((s) => (s._id === editingStockId ? data : s))
      );
      setEditingStockId(null);
    }
  };

  const cancelEditing = () => {
    setEditingStockId(null);
    setEditedStockData({
      product_name: "",
      category_code: "",
      price: "",
      stock: "",
      image_url: "",
      location: "",
    });
  };

  const deleteStock = async (id) => {
    await sendRequest({ url: `/stocks/${id}`, method: "DELETE" });
    setStocks((prev) => prev.filter((s) => s._id !== id));
  };

  useEffect(() => {
    const fetchStocks = async () => {
      const result = await sendRequest({ url: "/stocks", method: "GET" });
      if (result) setStocks(result);
    };
    fetchStocks();
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center text-gray-600 font-medium">
        Loading stocks...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-600 font-medium">
        Failed to load stocks: {error}
      </div>
    );
  }

  return (
    <div className="p-4 grow flex items-center justify-center">
      <div className="w-full max-w-4xl overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Stock name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Category code
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Stock price
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Count
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Image
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Location
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {stocks.map((stock) => (
              <StockRow
                key={stock._id}
                stock={stock}
                setEditedStockData={setEditedStockData}
                startEditingStock={startEditingStock}
                saveEditedStock={saveEditedStock}
                cancelEditing={cancelEditing}
                deleteStock={deleteStock}
                editedStockData={editedStockData}
                editingStockId={editingStockId}
              />
            ))}
          </tbody>
        </table>
      </div>
      <ButtonOfAdd addStock={addStock} />
    </div>
  );
}

function StockRow({
  stock,
  setEditedStockData,
  startEditingStock,
  saveEditedStock,
  cancelEditing,
  deleteStock,
  editingStockId,
  editedStockData,
}) {
  return (
    <tr key={stock._id} className="hover:bg-blue-50 transition">
      <td className="px-4 py-2 whitespace-nowrap">
        {editingStockId === stock._id ? (
          <input
            value={editedStockData.product_name}
            onChange={(e) =>
              setEditedStockData((prev) => ({
                ...prev,
                product_name: e.target.value,
              }))
            }
            className="border px-2 py-1 rounded w-full"
          />
        ) : (
          stock.product_name
        )}
      </td>
      <td className="px-4 py-2 whitespace-nowrap">{stock.category_code}</td>
      <td className="px-4 py-2 whitespace-nowrap">
        {editingStockId === stock._id ? (
          <input
            value={editedStockData.price}
            onChange={(e) =>
              setEditedStockData((prev) => ({
                ...prev,
                price: e.target.value,
              }))
            }
            className="border px-2 py-1 rounded w-full"
            type="number"
            min="0"
          />
        ) : (
          `${stock.price}$`
        )}
      </td>
      <td className="px-4 py-2 whitespace-nowrap">
        {editingStockId === stock._id ? (
          <input
            value={editedStockData.stock}
            onChange={(e) =>
              setEditedStockData((prev) => ({
                ...prev,
                stock: e.target.value,
              }))
            }
            className="border px-2 py-1 rounded w-full"
          />
        ) : (
          stock.stock
        )}
      </td>
      <td className="px-4 py-2 whitespace-nowrap">
        {editingStockId === stock._id ? (
          <input
            value={editedStockData.image_url}
            onChange={(e) =>
              setEditedStockData((prev) => ({
                ...prev,
                image_url: e.target.value,
              }))
            }
            className="border px-2 py-1 rounded w-full"
          />
        ) : (
          <img
            src={stock.image_url}
            alt={stock.product_name}
            className="w-10 h-10 object-cover rounded"
          />
        )}
      </td>
      <td className="px-4 py-2 whitespace-nowrap">
        {editingStockId === stock._id ? (
          <input
            value={editedStockData.location}
            onChange={(e) =>
              setEditedStockData((prev) => ({
                ...prev,
                location: e.target.value,
              }))
            }
            className="border px-2 py-1 rounded w-full"
          />
        ) : (
          stock.location
        )}
      </td>
      <td className="px-4 py-2 whitespace-nowrap flex gap-2">
        {editingStockId === stock._id ? (
          <>
            <button
              onClick={saveEditedStock}
              className="text-green-500 hover:text-green-700 transition"
            >
              <SaveIcon />
            </button>
            <button
              onClick={cancelEditing}
              className="text-gray-500 hover:text-gray-700 transition"
            >
              <CancelIcon />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => startEditingStock(stock)}
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <EditIcon />
            </button>
            <button
              onClick={() => deleteStock(stock._id)}
              className="text-red-600 hover:text-red-800 transition"
            >
              <DeleteIcon />
            </button>
          </>
        )}
      </td>
    </tr>
  );
}
