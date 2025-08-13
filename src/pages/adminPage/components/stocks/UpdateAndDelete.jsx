import React, { useState } from "react";

export default function UpdateAndDelete({ product, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    product_name: product.product_name,
    price: product.price,
    stock: product.stock,
    image_url: product.image_url,
    description: product.description,
    // category_code intentionally excluded from editing
  });

  const handleEditClick = () => setIsEditing(true);

  const handleChange = (e) => {
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdate({ ...product, ...editedProduct });
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            name="product_name"
            value={editedProduct.product_name}
            onChange={handleChange}
            className="border rounded px-2 py-1"
          />
        ) : (
          product.product_name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            name="price"
            value={editedProduct.price}
            onChange={handleChange}
            className="border rounded px-2 py-1"
          />
        ) : (
          product.price
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            name="stock"
            value={editedProduct.stock}
            onChange={handleChange}
            className="border rounded px-2 py-1"
          />
        ) : (
          product.stock
        )}
      </td>
      <td>
        {/* category_code is not editable */}
        {product.category_code}
      </td>
      <td>
        {isEditing ? (
          <input
            name="image_url"
            value={editedProduct.image_url}
            onChange={handleChange}
            className="border rounded px-2 py-1"
          />
        ) : (
          product.image_url
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            name="description"
            value={editedProduct.description}
            onChange={handleChange}
            className="border rounded px-2 py-1"
          />
        ) : (
          product.description
        )}
      </td>
      <td>
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-3 py-1 rounded mr-2"
          >
            שמור
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
          >
            ערוך
          </button>
        )}
        <button
          onClick={() => onDelete(product._id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          מחק
        </button>
      </td>
    </tr>
  );
}
