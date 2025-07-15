import React, { useEffect, useState } from "react";

export default function CardSection() {
  const [stock, setStock] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/stocks")
      .then((res) => res.json())
      .then((data) => setStock(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stock.map((stock) => (
          <div
            key={stock._id}
            className="bg-white rounded-xl shadow-md flex flex-col items-center p-4 border border-gray-200"
          >
            <img
              src={stock.image_url}
              alt="image"
              className="w-full h-40 object-cover rounded-3xl mb-2 shadow-2xl "
            />
            <h4 className="font-bold">name prodact: {stock.product_name}</h4>
            <h6 className="font-bold"> {stock.category}</h6>
            <p className="text-green-700 font-bold">price: {stock.price}</p>
            <p className="mt-2 mb-1 text-lg font-semibold text-gray-800 text-center">
              {stock.description}
            </p>
            <p className="font-bold">sum prodact: {stock.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
