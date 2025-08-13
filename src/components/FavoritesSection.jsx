import React from "react";
import { useEffect, useState } from "react";
import { api } from "../utils/api";

export default function FavoritesSection() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await api.get("/stocks");
        setFavorite(response.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="w-full px-8">
      <h2 className="text-2xl font-bold text-center text-blue-500 mb-4">Favorites</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {favorite.slice(0, 3).map((item) => (
          <div key={item._id} className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 transition-transform duration-200 hover:shadow-xl hover:border-blue-300">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image_url}
                  alt={item.product_name}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.product_name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-semibold">${item.price}</span>
                  <span className="text-gray-500 text-xs">{item.stock} in stock</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
