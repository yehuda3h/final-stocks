import React, { useContext, useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import AuthContext from "../../../context/AuthContext";
import SaveIcon from "../../../icons/SaveIcon";
import CancelIcon from "../../../icons/CancelIcon";
import EditIcon from "../../../icons/EditIcon";
import DeleteIcon from "../../../icons/DeleteIcon";

export default function MyStocksList({ stocks, setStocks }) {
  const { user } = useContext(AuthContext);
  const { error, loading, sendRequest } = useAxios();
  const [update, setUpdate] = useState(null);
  const [edited, setEdited] = useState({
    product_name: "",
    price: "",
    stock: "",
    image_url: "",
    location: "",
  });

  const handleEdit = (stock) => {
    setUpdate(stock._id);
    setEdited({
      product_name: stock.product_name,
      price: stock.price,
      stock: stock.stock,
      image_url: stock.image_url,
      location: stock.location,
    });
  };

  const handleCancel = () => {
    setUpdate(null);
    setEdited({
      product_name: "",
      price: "",
      stock: "",
      image_url: "",
      location: "",
    });
  };

  const handleSave = async () => {
    const payload = {
      ...edited,
      price: Number(edited.price),
      stock: Number(edited.stock),
    };

    if (!payload._id) {
      payload._id = update;
    }

    const data = await sendRequest({
      url: `/stocks/${update}`,
      method: "PUT",
      body: payload,
    });

    if (data) {
      setStocks((prev) => prev.map((s) => (s._id === update ? data : s)));
      setUpdate(null);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    const res = await sendRequest({
      url: `/stocks/${id}`,
      method: "DELETE",
    });

    if (res !== null) {
      setStocks((prev) => prev.filter((s) => s._id !== id));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await sendRequest({
        url: "/stocks/user",
      });
      if (data) setStocks(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center p-1 text-blue-300">
        Hello {user?.name}
      </h1>
      <p>{loading && "Loading..."}</p>

      {stocks.length === 0 ? (
        <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center text-gray-700">
          <p className="text-lg font-medium mb-2">
            You don't have any stocks yet.
          </p>
          <p className="text-sm text-gray-500">
            Would you like to add some?
          </p>
        </div>
      ) : (
        <div className="w-full max-w-4xl min-h-[400px] sm:min-h-[500px] mx-auto overflow-x-auto shadow-lg rounded-lg bg-white flex flex-col justify-center mt-6">
          <table className="min-w-full divide-y divide-gray-200">
            <TableHead />
            <tbody className="bg-white divide-y divide-gray-100">
              {stocks.map((s) => (
                <TableStockRow
                  key={s._id}
                  setEdited={setEdited}
                  stock={s}
                  handleEdit={handleEdit}
                  handleCancel={handleCancel}
                  handleSave={handleSave}
                  handleDelete={handleDelete}
                  update={update}
                  edited={edited}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function TableStockRow({
  stock,
  setEdited,
  handleEdit,
  handleCancel,
  handleSave,
  handleDelete,
  update,
  edited,
}) {
  return (
    <tr key={stock._id} className="hover:bg-blue-50 transition">
      <td className="px-4 py-2 whitespace-nowrap">
        {update === stock._id ? (
          <input
            value={edited.product_name}
            onChange={(e) =>
              setEdited({ ...edited, product_name: e.target.value })
            }
            className="border px-2 py-1 rounded w-full"
            type="text"
          />
        ) : (
          stock.product_name
        )}
      </td>
      <td className="px-4 py-2 whitespace-nowrap">{stock.category_code}</td>
      <td className="px-4 py-2 whitespace-nowrap">
        {update === stock._id ? (
          <input
            value={edited.price}
            onChange={(e) => setEdited({ ...edited, price: e.target.value })}
            className="border px-2 py-1 rounded w-full"
            type="number"
            min="0"
            step="0.01"
          />
        ) : (
          `${stock.price}$`
        )}
      </td>
      <td className="px-4 py-2 whitespace-nowrap">
        {update === stock._id ? (
          <input
            value={edited.stock}
            onChange={(e) => setEdited({ ...edited, stock: e.target.value })}
            className="border px-2 py-1 rounded w-full"
            type="number"
            min="0"
          />
        ) : (
          stock.stock
        )}
      </td>
      <td className="px-4 py-2 whitespace-nowrap">
        {update === stock._id ? (
          <input
            value={edited.image_url}
            onChange={(e) =>
              setEdited({ ...edited, image_url: e.target.value })
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
        {update === stock._id ? (
          <input
            value={edited.location}
            onChange={(e) => setEdited({ ...edited, location: e.target.value })}
            className="border px-2 py-1 rounded w-full"
          />
        ) : (
          <p>{stock.location}</p>
        )}
      </td>
      <td className="px-4 py-2 whitespace-nowrap flex gap-2">
        {update === stock._id ? (
          <>
            <button
              onClick={handleSave}
              className="text-green-500 hover:text-green-700 transition"
            >
              <SaveIcon />
            </button>
            <button
              onClick={handleCancel}
              className="text-gray-500 hover:text-gray-700 transition"
            >
              <CancelIcon />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => handleEdit(stock)}
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <EditIcon />
            </button>
            <button
              onClick={() => handleDelete(stock._id)}
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

function TableHead() {
  return (
    <thead className="bg-blue-100">
      <tr>
        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
          Product Name
        </th>
        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
          Category
        </th>
        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
          Price
        </th>
        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
          Stock
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
  );
}
