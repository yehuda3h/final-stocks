import { useState } from "react";
import { api } from "../../../../utils/api";
import SaveIcon from "../../../../icons/SaveIcon";
import CancelIcon from "../../../../icons/CancelIcon";
import EditIcon from "../../../../icons/EditIcon";

export default function CategoriesList({ categories, setCategories }) {
  const [update, setUpdate] = useState(null);
  const [edited, setEdited] = useState({
    category: "",
    image: "",
  });
  const [original, setOriginal] = useState(null);

  const handleEdit = (cat) => {
    setUpdate(cat.category_code);
    setOriginal(cat.category_code);
    setEdited({
      category: cat.category,
      image: cat.image,
    });
  };

  const handleCancel = () => {
    setUpdate(null);
    setEdited({ category: "", image: "" });
  };

  const handleSave = async () => {
    try {
      const { data } = await api.put(`/categories/${original}`, edited);

      setCategories((prev) => {
        return prev.map((cat) => {
          return cat.category_code === data.category_code ? data : cat;
        });
      });
    } catch (error) {
      console.error("Error updating category:", error);
    } finally {
      setUpdate(null);
    }
  };

  return (
    <div className="p-4 grow flex items-center justify-center">
      <div className="w-full max-w-4xl overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Category name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Category image
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Category code
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) =>
              update === cat.category_code ? (
                <EditRow
                  key={cat.category_code}
                  cat={edited}
                  code={cat.category_code}
                  setEdited={setEdited}
                  onCancel={handleCancel}
                  onSave={handleSave}
                />
              ) : (
                <tr key={cat._id} className="hover:bg-blue-50">
                  <td className="p-2 border-b">{cat.category}</td>
                  <td className="p-2 border-b">
                    <img
                      src={cat.image}
                      alt={cat.category}
                      className="w-10 h-10 object-cover rounded"
                    />
                  </td>
                  <td className="p-2 border-b">{cat.category_code}</td>
                  <td className="p-2 border-b">
                    <div className="flex justify-start gap-2">
                      <button
                        onClick={() => handleEdit(cat)}
                        className="text-blue-600 hover:text-blue-800 transition"
                        title="Edit"
                      >
                        <EditIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EditRow({ cat, code, setEdited, onCancel, onSave }) {
  return (
    <tr className="hover:bg-blue-50">
      <td className="p-2 border-b">
        <input
          value={cat.category}
          onChange={(e) =>
            setEdited((prev) => ({ ...prev, category: e.target.value }))
          }
          className="w-full px-2 py-1 border rounded"
        />
      </td>
      <td className="p-2 border-b">
        <input
          value={cat.image}
          onChange={(e) =>
            setEdited((prev) => ({ ...prev, image: e.target.value }))
          }
          className="w-full px-2 py-1 border rounded"
        />
      </td>
      <td className="p-2 border-b text-gray-500">{code}</td>
      <td className="p-2 border-b">
        <div className="flex gap-2">
          <button
            onClick={() => onSave(cat)}
            className="text-green-500 hover:text-green-700 transition"
          >
            <SaveIcon />
          </button>
          <button
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <CancelIcon />
          </button>
        </div>
      </td>
    </tr>
  );
}
