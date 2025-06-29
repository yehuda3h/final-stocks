import React from "react";
import stocks from "../data/stocks.json";

export default function FavoritesSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-200  ">
        Favorites
      </h2>

      <div className="flex gap-4 p-6 overflow-x-auto justify-center">
        {stocks.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 shadow-blue-300/100 transition-transform duration-200 hover:scale-105  w-72"
          >
            <img
              src={item.image_url}
              alt={item.product_name}
              className="w-full h-32 lg:h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{item.product_name}</h3>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
