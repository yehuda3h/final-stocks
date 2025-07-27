import React from 'react'

export default function CategoriesList({ categories }) {
  return (
    <div className="p-4">
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-blue-100 text-left">
          <tr>
            <th className="p-2 border-b"> category name</th>
            <th className="p-2 border-b"> category image</th>
            <th className="p-2 border-b"> category code</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat._id} className="hover:bg-blue-50">
              <td className="p-2 border-b">{cat.category}</td>
              <td className="p-2 border-b">
                <img src={cat.image} alt={cat.category} className="w-10 h-10 object-cover rounded" />
              </td>
              <td className="p-2 border-b">{cat.category_code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
   
